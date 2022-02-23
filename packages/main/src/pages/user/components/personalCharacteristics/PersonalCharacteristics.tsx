import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import "antd/lib/tooltip/style/index.css";
import {
    properties,
    strings,
    general,
    descriptions,
} from "../../../../constants/BigFive.constants";
import Bar from "../../../../components/data/bar/Bar";
import { BigFive } from "../../../../types/BigFive";
import styles from "./PersonalCharacteristics.module.css";

type PropsType = {
    data: BigFive;
};

interface IConstants {
    extraversion: string;
}

const PersonalCharacteristics: React.FC<PropsType> = ({ data }) => {
    return (
        <div className={styles.container}>
            {Object.keys(data).map((key) => (
                <div key={key} className={styles.row}>
                    <div className={styles.labelContainer}>
                        <div className={styles.label}>
                            {strings[key as keyof IConstants].label}
                            <Tooltip
                                title={descriptions[key as keyof IConstants]}
                            >
                                <div className={styles.infoIcon}>
                                    <InfoCircleOutlined />
                                </div>
                            </Tooltip>
                        </div>
                        <div className={styles.explanation}>
                            {strings[key as keyof IConstants].explanation}
                        </div>
                    </div>
                    <Bar
                        labelA={properties[key as keyof IConstants].labelA}
                        labelB={properties[key as keyof IConstants].labelB}
                        percentage={
                            data[key as keyof IConstants][
                                properties[key as keyof IConstants].propertyA
                            ]
                        }
                        colorScheme={general.colorScheme}
                    />
                </div>
            ))}
        </div>
    );
};

export default PersonalCharacteristics;
