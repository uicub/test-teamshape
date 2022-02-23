/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";
import { Progress } from "antd";
import "antd/lib/progress/style/index.css";
import cx from "classnames";
import styles from "./Progress.module.css";

type PropsType = {
    percentage: number;
    color?: string;
    extraText?: string;
};
interface Data {
    strokeColor?: string;
}

const ProgressCircular: React.FC<PropsType> = ({
    percentage,
    color = "",
    extraText,
}) => {
    const extraProps: Data = {};
    if (color) {
        extraProps.strokeColor = color;
    }
    return (
        <div className={styles.container}>
            <div>
                <div
                    className={cx(styles.percentageContainerHor, styles.right)}
                >
                    <div className={styles.horizontalLine} />
                    <div className={styles.percentage}>25</div>
                </div>
                <div
                    className={cx(styles.smallSeparator, styles.rightBottom)}
                 />
                <div
                    className={cx(styles.percentageContainerVer, styles.bottom)}
                >
                    <div className={styles.verticalLine} />
                    <div className={styles.percentage}>50</div>
                </div>
                <div
                    className={cx(styles.smallSeparator, styles.leftBottom)}
                 />
                <div className={cx(styles.percentageContainerHor, styles.left)}>
                    <div className={styles.percentage}>75</div>
                    <div className={styles.horizontalLine} />
                </div>
                <div
                    className={cx(styles.smallSeparator, styles.leftTop)}
                 />
                <div className={cx(styles.percentageContainerVer, styles.top)}>
                    <div className={styles.percentage}>100</div>
                    <div className={styles.verticalLine} />
                </div>
                <div
                    className={cx(styles.smallSeparator, styles.rightTop)}
                 />
            </div>
            <Progress
                percent={percentage}
                type="circle"
                {...extraProps}
                format={(percent) => {
                    if (extraText) {
                        return (
                            <div>
                                <div>{`${percent}%`}</div>
                                <div className={styles.extraText}>
                                    {extraText}
                                </div>
                            </div>
                        );
                    }
                    return `${percent}%`;
                }}
                strokeWidth={8}
                success={{ percent: 0 }}
            />
        </div>
    );
};

export default ProgressCircular;
