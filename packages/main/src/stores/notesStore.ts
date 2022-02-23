/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { observable, action, autorun } from "mobx";
import { createContext } from "react";
import { Note } from "../types/Notes";
import session from "./sessionStore";
import api from "../utils/ApiService";

class UserNotes {
    @observable userId? = "";

    @observable notes: Note[] = [];

    @observable disposer;

    constructor() {
        this.disposer = autorun(() => {
            if (session.isAuthenticated && this.userId) {
                this.getUserNotes();
            }
            if (!session.isAuthenticated) {
                this.userId = "";
            }
        });
    }

    componentWillUnmount() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        this.disposer && this.disposer();
    }

    @action
    getUserNotes = async () => {
        try {
            if (this.userId) {
                const resp = await api.getUserNotes(this.userId);
                if (resp) {
                    this.notes = resp;
                }
            }
        } catch (err) {
            console.log("err", err);
        }
    };

    @action
    postUserNote = async (id?: string, note?: string) => {
        try {
            const resp = await api.postUserNote(id, note);
            if (resp?.success) {
                this.getUserNotes();
            }
            return resp;
        } catch (err) {
            console.log("err", err);
            return { success: false };
        }
    };
}

export default createContext(new UserNotes());
