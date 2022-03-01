/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable import/no-cycle */
import axios, { AxiosInstance } from "axios";
import session from "../stores/sessionStore";
import { INewSurvey } from "../types/Surveys";
import { Manager, Employee, Team } from "../types/Team";

class ApiService {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            baseURL: `${process.env.REACT_APP_BASE_API_URL}`,
        });
    }

    private privateGetCall = async (url: string) => {
        this.instance.defaults.headers.common.Authorization = `Token ${session.sessionToken}`;
        try {
            const response = await this.instance.get(url);
            return response?.data;
        } catch (err) {
            return {
                error: true,
                data: err?.response?.data,
            };
        }
    };

    private privatePostCall = async (url: string, data: unknown) => {
        console.log("post data: ", data);
        this.instance.defaults.headers.common.Authorization = `Token ${session.sessionToken}`;
        try {
            const response = await this.instance.post(url, data);
            if (response.status === 201 || response.status === 200) {
                return {
                    success: true,
                    data: response?.data,
                };
            }
            return {
                error: true,
                data: response?.data,
            };
        } catch (err) {
            return {
                error: true,
                data: err?.response?.data,
            };
        }
    };

    public login = async (data: unknown) => {
        console.log("login data: ", data);
        try {
            const response = await this.instance.post("/users/login", data);
            return response?.data;
        } catch (err) {
            return {
                error: true,
                data: err?.response?.data,
            };
        }
    };

    public signup = async (data: unknown) => {
        try {
            const response = await this.instance.post(
                "/users/registration",
                data
            );
            return response?.data;
        } catch (err) {
            return {
                error: true,
                data: err?.response.data,
            };
        }
    };

    public updateProfile = async (data: unknown) => {
        const response = await this.privatePostCall(
            "/users/update-profile",
            data
        );
        return response;
    };

    public verifyToken = async (token: string) => {
        try {
            const response = await this.instance.get(
                `/users/verify-email/${token}`
            );
            return response?.data;
        } catch (err) {
            return {
                error: true,
                data: err?.response.data,
            };
        }
    };

    public getSurvey = async (surveyId: string, userId: string) => {
        try {
            const response = await this.instance.get(
                `/survey/${surveyId}/${userId}`
            );
            return response?.data;
        } catch (err) {
            return {
                error: true,
                data: err?.response?.data,
                status: {
                    number: err?.response?.status,
                    text: err?.response?.statusText,
                },
            };
        }
    };

    // eslint-disable-next-line @typescript-eslint/ban-types
    public postSurvey = async (
        surveyId: string | undefined,
        userId: string | undefined,
        data: {}
    ) => {
        try {
            const response = await this.instance.post(
                `/survey/${surveyId}/${userId}`,
                data
            );
            if (response.status === 201 || response.status === 200) {
                return {
                    success: true,
                    data: response?.data,
                };
            }
            return {
                error: true,
                data: response?.data,
            };
        } catch (err) {
            return {
                error: true,
                data: err?.response?.data,
            };
        }
    };

    public getTeam = async () => {
        const resp = await this.privateGetCall("/users/team");
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return resp;
    };

    public getMyTeams = async () => {
        const resp = await this.privateGetCall("/users/myteams");
        return resp;
    };

    public getUser = async (id: string) => {
        const resp = await this.privateGetCall(`/users/user/${id}`);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return resp;
    };

    public getUserNotes = async (id: string) => {
        const resp = await this.privateGetCall(`/notes/user/${id}`);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return resp;
    };

    public getTeamSurveys = async (id: string) => {
        const resp = await this.privateGetCall(`/survey/team/${id}`);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return resp;
    };

    public getTeamFeedbacks = async (id: string) => {
        const resp = await this.privateGetCall(`/notes/feedback/${id}`);
        return resp;
    };

    public getTeamWellbeing = async (id: string) => {
        const resp = await this.privateGetCall(`/wellbeing/team/${id}`);
        return resp;
    };

    public postUserNote = async (id?: string, note?: string) => {
        const resp = await this.privatePostCall(`/notes/user/${id}`, note);
        return resp;
    };

    public postNewSuervey = async (data: INewSurvey) => {
        const resp = await this.privatePostCall("/survey/new-survey/", data);
        return resp;
    };

    public postNewManager = async (data: Manager) => {
        const resp = await this.privatePostCall("/managers/new-manager/", data);
        return resp;
    };

    public postNewEmployee = async (data: Employee) => {
        const resp = await this.privatePostCall("/employee/new-employee/", data);
        return resp;
    };

    public postNewTeam = async (data: Team) => {
        const resp = await this.privatePostCall("/team/new-team/", data);
        return resp;
    };

    public sendPAMail = async (data: { team: string }) => {
        const resp = await this.privatePostCall(
            "/insights/send-pa-mail-to-team/",
            data
        );
        return resp;
    };

    // eslint-disable-next-line @typescript-eslint/ban-types
    public createCheckoutSession = (data: {}) => {
        const resp = this.privatePostCall(
            "subscription/create-checkout-session",
            data
        );
        return resp;
    };

    public getPricingPlans = async () => {
        const resp = await this.privateGetCall(`subscription/myplan`);
        return resp;
    };
}
const api = new ApiService();
export default api;
