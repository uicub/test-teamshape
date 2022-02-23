/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { observable, action, autorun, computed } from "mobx";
import { createContext } from "react";
import moment from "moment";
import { BigFiveParsed } from "../types/BigFive";
import { Note, Feedback } from "../types/Notes";
import { Answers } from "../types/Schwartz";
import session from "./sessionStore";
import { schwartzLabels } from "../constants/UserData.constants";
import { getUserColor } from "../utils/HelperFunctions";
import { properties } from "../constants/BigFive.constants";

import { Team, WellbeingFormatted, Member, User } from "../types/Team";
import api from "../utils/ApiService";

class TeamStore {
    @observable team: Team | null = null;

    // All teams of user's company
    @observable myteams: Team[] = [];

    @observable feedbacks: Feedback[] = [];

    @observable wellbeing: WellbeingFormatted[] = [];

    @observable members: Member[] = [];

    @observable year = "";

    @observable overallDateFilter: moment.Moment[] | moment.MomentInput[] = [];

    @observable disposer;

    colors = {
        0: "#F1466E",
        1: "#2057FF",
        2: "#FF872B",
        3: "#35B201",
        4: "#E7D342",
        5: "#970FD1",
        6: "#0E054D",
    };

    schwartzData = [
        "self_direction",
        "universalism",
        "benevolence",
        "tradition",
        "conformity",
        "security",
        "power",
        "achievement",
        "hedonism",
        "stimulation",
    ];

    constructor() {
        this.disposer = autorun(() => {
            console.log("is authenticated", session.isAuthenticated);
            if (session.isAuthenticated) {
                this.loadTeam();
                this.loadMyTeams();
            }
        });
        this.overallDateFilter = [moment().subtract(6, "months"), moment()];
    }

    componentWillUnmount() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.disposer && this.disposer();
    }

    @computed
    get teamName() {
        return this.team?.name;
    }

    @computed
    get managerName() {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return `${this.team?.manager?.first_name} ${this.team?.manager?.last_name}`;
    }

    @computed
    get checkedSchwartz(): Member[] {
        return this.members.filter((member) => member.checkedSchwartz);
    }

    @computed
    get checkedBigFive() {
        return this.members.filter((member) => member.checkedBigFive);
    }

    @computed
    get membersFiltered() {
        return this.members.filter((member) => member.member.test_completed);
    }

    @computed
    get teamSchwartz() {
        const colors: string[] = [];
        const keys: string[] = [];
        const data =
            (!!this.checkedSchwartz.length &&
                this.getSchwartz(this.checkedSchwartz)) ||
            [];

        this.checkedSchwartz.forEach((member) => {
            // colors.push(this.colors[member.color]); TODO: fix this
            keys.push(`${member.member.first_name} ${member.member.last_name}`);
        });
        return {
            data,
            colors,
            keys,
        };
    }

    @computed
    get teamBigFive() {
        return this.checkedBigFive.map((member) => {
            return {
                user: member.member,
                data: this.getBigFive(member.member),
            };
        });
    }

    @computed
    get col1Members() {
        return this.members.filter((member) => member.column === 1);
    }

    @computed
    get col2Members() {
        return this.members.filter((member) => member.column === 2);
    }

    @action
    loadMyTeams = async () => {
        const teamList: Team[] = await api.getMyTeams();
        console.log("teamList: ", teamList);
        this.myteams = teamList;
    };

    @action
    loadTeam = async () => {
        try {
            const teamData: Team = await api.getTeam();
            console.log("team data", teamData);
            this.team = teamData;
            this.members = this.parseTeam();
            if (this.team?.uid) {
                const feedbacks: Feedback[] = await api.getTeamFeedbacks(
                    this.team.uid
                );
                this.feedbacks =
                    (feedbacks && !!feedbacks.length && feedbacks) || [];
                const wellbeing = await api.getTeamWellbeing(this.team.uid);
                this.wellbeing =
                    (wellbeing &&
                        !!wellbeing.length &&
                        wellbeing.map(
                            (data: {
                                date: date;
                                people_culture: number;
                                leadership: number;
                                mental_health: number;
                            }) => {
                                return {
                                    date: data.date,
                                    peopleCulture: data.people_culture,
                                    leadership: data.leadership,
                                    mentalHealth: data.mental_health,
                                };
                            }
                        )) ||
                    [];
            }
        } catch (err) {
            console.log("err", err);
        }
    };

    @computed
    get formattedWellbeing() {
        const dateFrom =
            (!!this.overallDateFilter?.length && this.overallDateFilter[0]) ||
            moment();
        const dateTo =
            (!!this.overallDateFilter?.length && this.overallDateFilter[1]) ||
            moment();
        const filtered =
            (!!this.wellbeing?.length &&
                this.wellbeing
                    .filter((data) => {
                        return moment(data.date, "YYYY MM DD").isBetween(
                            dateFrom,
                            dateTo,
                            "day",
                            "[]"
                        );
                    })
                    .sort(
                        (a, b) =>
                            moment(a.date, "YYYY MM DD").valueOf() -
                            moment(b.date, "YYYY MM DD").valueOf()
                    )) ||
            [];
        return filtered || this.wellbeing;
    }

    @action
    getUser = (id: string | undefined): User => {
        let user = this.team?.members?.find((member) => member.uid === id);
        if (!user && this.team?.manager.uid === id) {
            user = this.team?.manager;
        }
        return (user && user) || ({} as User);
    };

    @action
    getSchwartzData = (answers: Answers, memberKey: string) => {
        const keys = this.schwartzData;
        const data = keys.map((key) => {
            const value = answers[key] * 10;
            const label = schwartzLabels[key];
            return {
                type: label,
                [memberKey]: value,
            };
        });
        return data;
    };

    @action
    getUserNotes = async (id: string) => {
        try {
            const notes: Note[] = await api.getUserNotes(id);
            return (!!notes && notes) || [];
        } catch (err) {
            console.log("err", err);
            return [];
        }
    };

    @action
    postUserNote = async (id: string, note) => {
        try {
            const resp = await api.postUserNote(id, note);
            return resp;
        } catch (err) {
            console.log("err", err);
        }
    };

    @action
    parseTeam = () => {
        let col = 1;
        const filtered = this.team?.members && [...this.team?.members];
        let teamResults = {};
        if (this.team?.test_results && this.team?.test_results?.schwartz) {
            teamResults = {
                ...this.team?.test_results,
                schwartz: {
                    answers: this.team?.test_results?.schwartz.average,
                },
            };
        }
        const teamData = {
            first_name: this.teamName || "",
            last_name: "",
            test_results: teamResults,
            active: true,
            email: "",
            test_completed: true,
            uid: "1",
            activity: this.team?.wellbeing.activity || 0,
        } as User;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        filtered && filtered.unshift(teamData);
        const members =
            filtered &&
            filtered.map((member) => {
                const data: Member = {
                    member,
                    checkedSchwartz: member.uid === "1",
                    checkedBigFive: member.uid === "1",
                    column: col,
                    color: getUserColor(member.uid),
                };
                // eslint-disable-next-line no-plusplus
                col++;
                if (col > 2) {
                    col = 1;
                }
                return data;
            });
        return members || ([] as Member[]);
    };

    @action
    testCall = () => {
        console.log("in test call");
    };

    getSchwartz = (members) => {
        const keys = this.schwartzData;
        const data = keys.map((key) => {
            const label = schwartzLabels[key];
            const parsedData = {
                type: label,
            };
            members.forEach((mbr) => {
                parsedData[`${mbr.member.first_name} ${mbr.member.last_name}`] =
                    mbr.member?.test_results?.schwartz?.answers[key] * 10;
            });
            return parsedData;
        });
        return data;
    };

    getBigFive = (member) => {
        return (
            member?.test_results?.bigfive &&
            (Object.keys(member.test_results.bigfive).reduce((object, key) => {
                if (member.uid === "1") {
                    object[key] = member.test_results.bigfive[key].percentage;
                } else {
                    object[key] =
                        member.test_results.bigfive[key][
                            properties[key].propertyA
                        ];
                }
                return object;
            }, {}) as BigFiveParsed)
        );
    };

    indeterminate = (type) => {
        const data =
            type === "schwartz" ? this.checkedSchwartz : this.checkedBigFive;
        return !!data.length && data.length < this.membersFiltered.length;
    };

    checkAll = (type) => {
        const data =
            type === "schwartz" ? this.checkedSchwartz : this.checkedBigFive;
        return data.length === this.membersFiltered.length;
    };

    onCheckAllChange = (type, val) => {
        let value = false;
        if (val.target.checked) {
            value = true;
        }
        this.members = this.members.map((member) => {
            return {
                ...member,
                [type === "schwartz" ? "checkedSchwartz" : "checkedBigFive"]:
                    member.member.test_completed && value,
            };
        });
    };
}

export default createContext(new TeamStore());
