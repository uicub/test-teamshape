import React from "react";
import Drawer from "../../../../../components/drawer/Drawer";
import styles from "./PersonalityDrawer.module.css";
import { Description } from "../../../../../types/Jungian";
import { constants } from "./PersonalityDrawer.constants";

type PropsType = {
    data: Description;
    visible: boolean;
    onClose: () => void;
};

interface IConstants {
    title: string;
}

const PersonalityDrawer: React.FC<PropsType> = ({ data, visible, onClose }) => {
    return (
        <Drawer
            title={constants.strings.title}
            onClose={onClose}
            visible={visible}
        >
            <div className={styles.container}>
                {Object.keys(data).map((key) => (
                    <div key={key} className={styles.paragraph}>
                        <h3>{constants.strings[key as keyof IConstants]}</h3>
                        <div>{data[key]}</div>
                    </div>
                ))}
            </div>
        </Drawer>
    );
};

export default PersonalityDrawer;
