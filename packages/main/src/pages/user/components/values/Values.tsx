/* eslint-disable react/no-array-index-key */
import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import IconLabel from "../../../../components/labels/smallWithIcon/SmallLabelIcon";
import { status } from "../../../../constants/Statuses.constants";
import Radar from "../../../../components/data/radar/Radar";
import { constants } from "./Values.constants";
import styles from "./Values.module.css";

interface Data {
    [key: string]: string | number;
}

type PropsType = {
    data: Data[];
    motivated: string[];
    demotivated: string[];
    keys: string[];
};

const Values: React.FC<PropsType> = ({
    data,
    motivated,
    demotivated,
    keys,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.radarContainer}>
                <Radar
                    data={data}
                    keys={keys}
                    height={constants.radarHeight}
                    colors={["#2B5CFF"]}
                />
            </div>
            <div className={styles.listContainer}>
                <div className={styles.labelContainer}>
                    <div className={styles.label}>
                        {constants.strings.motivated}
                    </div>
                    <div className={styles.label}>
                        {constants.strings.demotivated}
                    </div>
                </div>
                <div className={styles.lists}>
                    <div className={styles.list}>
                        {Object.values(motivated).map((item, index) => (
                            <IconLabel
                                key={`${constants.types.motivated}_${index}`}
                                text={item}
                                Icon={<CheckCircleOutlined />}
                                type={status.success}
                            />
                        ))}
                    </div>
                    <div className={styles.list}>
                        {Object.values(demotivated).map((item, index) => (
                            <IconLabel
                                key={`${constants.types.demotivated}_${index}`}
                                text={item}
                                Icon={<CloseCircleOutlined />}
                                type={status.error}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;
