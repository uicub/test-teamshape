import { BigFive, TeamBigFive, BigFiveParsed } from "./BigFive";
import { Jungian } from "./Jungian";
import { Schwartz, TeamSchwartz } from "./Schwartz";

export interface Team {
    company: Company;
    created_at: string;
    manager: User;
    members: User[];
    name: string;
    results_calculated_at: string;
    test_results: TeamResults;
    wellbeing: Wellbeing;
    uid: string;
}

export interface Company {
    name: string;
    uid: string;
}

export interface User {
    active: boolean;
    activity: number;
    email: string;
    first_name: string;
    last_name: string;
    photo: string;
    test_completed: boolean;
    test_results: Results;
    uid: string;
    team: string;
}

export interface Manager {
    managerMail: string;
    groupName: string;
    managerName: string;
}
export interface Employee {
    email: string;
    first_name: string;
    uid: string;
    team: string;
    test_completed: boolean;
}

export interface Results {
    bigfive: BigFive;
    jungian: Jungian;
    schwartz: Schwartz;
    uid: string;
}

export interface TeamResults {
    bigfive: TeamBigFive;
    schwartz: TeamSchwartz;
    uid: string;
    employees_when_calculated: number;
}

export interface Wellbeing {
    activity: number;
    leadership: number;
    mental_health: number;
    people_and_culture: number;
}
export interface WellbeingFormatted {
    date: number;
    leadership: number;
    mentalHealth: number;
    peopleCulture: number;
}
export interface Member {
    member: User;
    checkedSchwartz: boolean;
    checkedBigFive: boolean;
    column: number;
    color: number;
}

export interface TeamBigFiveParsed {
    user: User;
    data: BigFiveParsed;
}

interface Header {
    string: string;
}

export interface IProfileInput {
    first_name: string;
    last_name: string;
    email: string;
    old_password: string;
    new_password: string;
    photo: File;
    headers: unknown;
}
