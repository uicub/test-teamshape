import React, { useState } from "react";
import moment from "moment";
import { User } from "../../types/Team";
import { Author } from "../../types/Notes";
import styles from "./Note.module.css";
import Avatar from "../avatar/Avatar";
import { constants } from "./Note.constants";

type PropsType = {
    note: string;
    user?: User | Author;
    date: string;
    anonymous?: boolean;
};
interface Data {
    anonymous?: boolean;
    user?: User | Author;
}

const Note: React.FC<PropsType> = ({ note, user, date, anonymous = false }) => {
    const [readMore, setReadMore] = useState(false);
    const avatarProps: Data = {};
    let name = "";
    if (anonymous) {
        avatarProps.anonymous = true;
        name = constants.strings.anonymous;
    } else {
        avatarProps.user = user;
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        name = `${user?.first_name} ${user?.last_name}`;
    }
    const textShort =
        note.length > constants.maxCharacters
            ? note.slice(0, constants.maxCharacters)
            : note;
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.userContainer}>
                    <Avatar {...avatarProps} />
                    <div className={styles.userName}>{name}</div>
                </div>
                <div className={styles.date}>
                    {moment(date).format(constants.dateFormat)}
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>{readMore ? note : textShort}</p>
                {note.length > constants.maxCharacters && (
                    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                    <div
                        className={styles.readMore}
                        onClick={() => setReadMore(!readMore)}
                    >
                        {readMore
                            ? constants.strings.readLess
                            : constants.strings.readMore}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Note;
