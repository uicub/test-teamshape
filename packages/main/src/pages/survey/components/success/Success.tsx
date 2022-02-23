import React, { useContext } from "react";
import cx from "classnames";
import { isMobile, isMobileOnly } from "react-device-detect";
import SurveyStore from "../../../../stores/surveyStore";
import { ReactComponent as Tick } from "../../../../assets/tick.svg";
import { constants } from "./Success.constants";
import styles from "./Success.module.css";

interface Obj {
    title: string;
    description: string;
}

interface IConstants {
    en: Obj;
    lt: Obj;
}

const Success: React.FC = () => {
    const surveyStore = useContext(SurveyStore);
    return (
        <div className={styles.container}>
            <div
                className={cx(styles.border1, {
                    [styles.border1Mobile]: isMobileOnly,
                })}
            >
                <div className={styles.border2}>
                    <div className={styles.border3}>
                        <Tick />
                    </div>
                </div>
            </div>
            <div
                className={cx(styles.title, {
                    [styles.titleMobile]: isMobileOnly,
                })}
            >
                {
                    constants.strings[surveyStore.language as keyof IConstants]
                        .title
                }
            </div>
            <div
                className={cx(styles.description, {
                    [styles.descriptionMobile]: isMobile,
                    [styles.descriptionMobileOnly]: isMobileOnly,
                })}
            >
                {
                    constants.strings[surveyStore.language as keyof IConstants]
                        .description
                }
            </div>
        </div>
    );
};

export default Success;
