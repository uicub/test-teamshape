/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";
import styles from "./Bar.module.css";

type PropsType = {
    percentage: number;
    labelA: string;
    labelB: string;
    colorScheme: string;
};
const Bar: React.FC<PropsType> = ({
    percentage,
    labelA,
    labelB,
    colorScheme,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.topPercentageContainer}>
                <div>{`${percentage}%`}</div>
                <div>{`${100 - percentage}%`}</div>
            </div>

            <div className={styles[`barContainer${colorScheme}`]}>
                <div
                    className={styles[`percentageBar${colorScheme}`]}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className={styles.labelsContainer}>
                <div>{labelA}</div>
                <div>{labelB}</div>
            </div>
        </div>
    );
};

export default Bar;
