/* eslint-disable @typescript-eslint/no-floating-promises */
import { observable, action, autorun } from "mobx";
import { createContext } from "react";
import session from "./sessionStore";
import { SurveyFull } from "../types/Surveys";
import api from "../utils/ApiService";

class TeamSurveys {
    @observable surveys: SurveyFull[] = [];

    @observable teamId = "";

    @observable disposer;

    constructor() {
        this.disposer = autorun(() => {
            if (session.isAuthenticated && this.teamId) {
                this.getTeamSurveys();
            }
            if (!session.isAuthenticated) {
                this.teamId = "";
            }
        });
    }

    componentWillUnmount() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.disposer && this.disposer();
    }

    @action
    getTeamSurveys = async () => {
        try {
            const resp = await api.getTeamSurveys(this.teamId);
            if (resp.error) {
                return;
            }
            if (resp) {
                this.surveys = resp;
            }
        } catch (err) {
            console.log("err", err);
        }
    };
}

export default createContext(new TeamSurveys());
