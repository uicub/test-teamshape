/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { observable, action, computed } from "mobx";
import { createContext } from "react";
import { message } from "antd";
import api from "../utils/ApiService";
import {
    Survey as SurveyType,
    SubmitData,
    Answers,
    SubmitFeedback,
    SurveyError,
} from "../types/Surveys";

export interface SurveyValues {
    key: string;
    question: string;
    answer: string;
}
interface StringArray {
    [index: string]: string;
}

class Survey {
    [x: string]: unknown;

    @observable questions: StringArray = {};

    @observable survey: SurveyType[] = [];

    @observable step = 1;

    @observable feedback = false;

    @observable completed = false;

    @observable error = false;

    @observable errorData: SurveyError = {} as SurveyError;

    @observable language = "en";

    @observable submitError = "";

    @computed
    get stepsNumber() {
        return Object.keys(this.questions).length;
    }

    @computed
    get next() {
        return !this.feedback;
    }

    @computed
    get back() {
        return this.step > 1;
    }

    @computed
    get question() {
        return this.survey[this.step - 1];
    }

    @action
    getSurvey = async (surveyId: string, userId: string) => {
        const resp = await api.getSurvey(surveyId, userId);
        if (resp.error) {
            this.error = true;
            this.errorData = resp.status;
            return;
        }
        this.questions = resp.questions;
        this.language = resp.language;
        this.survey = Object.keys(this.questions).map((key) => ({
            key,
            question: this.questions[key],
            answer: 1,
        }));
    };

    @action
    onNext = () => {
        if (this.step !== this.stepsNumber) {
            this.step += 1;
        } else {
            this.feedback = true;
        }
    };

    @action
    onBack = () => {
        this.step -= 1;
    };

    @action
    setAnswer = (val: string) => {
        this.survey[this.step - 1].answer = parseInt(val);
    };

    @action
    formatSurvey = () => {
        const data: SubmitData = {
            answers: {} as Answers,
        };
        this.survey.forEach((item) => {
            data.answers[item.key] = item.answer;
        });
        return data;
    };

    @action
    submit = async (
        surveyId: string | undefined,
        userId: string | undefined,
        feedback = {} as SubmitFeedback
    ) => {
        this.submitError = "";
        const data: SubmitData = this.formatSurvey();
        if (Object.keys(feedback).length) {
            data.feedback = feedback;
        }
        const resp = await api.postSurvey(surveyId, userId, data);
        if (resp.success) {
            this.completed = true;
        }
        if (resp.error) {
            message.error(resp.data.detail);
        }
    };

    @action
    submitWithFeedback = async (
        feedback: string,
        anonymous: boolean,
        surveyId: string | undefined,
        userId: string | undefined
    ) => {
        if (!feedback) {
            this.submitError = "emptyFeedback";
            return;
        }
        const feedbackData: SubmitFeedback = {
            feedback,
            anonymous,
        };
        this.submit(surveyId, userId, feedbackData);
    };
}
export default createContext(new Survey());
