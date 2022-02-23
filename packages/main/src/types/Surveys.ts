import { Feedback } from "./Notes";

export interface SurveyFull {
    answers: Answers;
    created_at: string;
    ends_at: string;
    feedbacks: Feedback[];
    questions: Questions;
    starts_at: string;
    status: string;
    type: string;
    uid: string;
}

export interface Questions {
    [index: string]: string;
    Q1: string;
    Q2: string;
    Q3: string;
}

export interface Answers {
    [index: string]: number;
    Q1: number;
    Q2: number;
    Q3: number;
}

export interface Survey {
    answer: number;
    key: string;
    question: string;
}

export interface SubmitFeedback {
    anonymous: boolean;
    feedback: string;
}

export interface SubmitData {
    [index: number]: number;
    answers: Answers;
    feedback?: SubmitFeedback;
}

export interface SurveyError {
    number:
        | 403
        | 404
        | 500
        | "403"
        | "404"
        | "500"
        | "success"
        | "error"
        | "info"
        | "warning"
        | undefined;
    text: string;
}

interface NewQuestion {
    [id: number]: number;
    question: string;
    title: string;
}

export interface INewSurvey {
    team: string;
    week: string;
    startDate: string;
    endDate: string;
    questions: Array<NewQuestion>;
}
