/* eslint-disable import/no-cycle */
import { observable, action, computed } from "mobx";
import Cookies from "js-cookie";
import routing from "./routingStore";
import { User } from "../types/Team";
// eslint-disable-next-line import/no-cycle
import api from "../utils/ApiService";

class Session {
    @observable sessionToken = "";

    @observable sessionUser: User | null = null;

    @observable loginError = "";

    @observable signUpError = "";

    constructor() {
        const token = Cookies.get("token");
        if (token) {
            this.sessionToken = token;
            const user = localStorage.getItem("user");
            if (!user) {
                this.logout();
                return;
            }
            this.sessionUser = JSON.parse(user);
        }
    }

    @computed get isAuthenticated() {
        return !!this.sessionToken;
    }

    @action
    login = async (data: unknown) => {
        this.loginError = "";
        const resp = await api.login(data);
        if (!resp?.error) {
            this.sessionToken = resp?.token;
            Cookies.set("token", this.sessionToken, { expires: 1 });
            this.sessionUser = resp?.user;
            localStorage.setItem("user", JSON.stringify(this.sessionUser));
            routing.navigate(`dashboard`);
        } else {
            this.loginError = resp?.data?.non_field_errors?.[0];
        }
    };

    @action updateProfile = async (data: unknown) => {
        const resp = await api.updateProfile(data);
        if (!resp?.error) {
            this.sessionUser = resp?.data?.user;
        }
        return resp;
    };

    @action signup = async (data: unknown) => {
        this.signUpError = "";
        const resp = await api.signup(data);
        if (!resp?.error) {
            routing.navigateNoAuth("emailsent");
        } else {
            this.signUpError = resp?.data?.message;
        }
    };

    @action logout = () => {
        Cookies.remove("token");
        localStorage.removeItem("user");
        this.sessionUser = null;
        this.sessionToken = "";
        routing?.navigate("login");
    };
}
const session = new Session();
export default session;
