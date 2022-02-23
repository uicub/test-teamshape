/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { observable, action, autorun } from "mobx";
import { createContext } from "react";
import api from "../utils/ApiService";
import { Plans } from "../types/PricingPlan";
import session from "./sessionStore";

class PricingStore {
    @observable userId = "";

    @observable plans: Plans[] = [];

    @observable disposer;

    constructor() {
        this.disposer = autorun(() => {
            if (session.isAuthenticated) {
                this.getPricingPlans();
            }
            if (!session.isAuthenticated) {
                this.userId = "";
            }
        });
    }

    componentWillUnmount() {
        this.disposer && this.disposer();
    }

    @action
    getPricingPlans = async () => {
        try {
            const resp = await api.getPricingPlans();
            console.log(resp);
            if (resp) {
                this.plans = resp;
            }
        } catch (err) {
            console.log("err", err);
        }
    };
}

export default createContext(new PricingStore());
