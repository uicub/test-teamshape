import React, { useState } from "react";
import { Button } from "antd";
import "antd/lib/button/style/index.css";
import Bar from "../../../../components/data/bar/Bar";
import styles from "./Personality.module.css";
import { Jungian } from "../../../../types/Jungian";
import { constants } from "./Personality.constants";
import PersonalityDrawer from "./components/PersonalityDrawer";

type PropsType = {
    data: Jungian;
};

const Personality: React.FC<PropsType> = ({ data }) => {
    const [personalityDrawer, setPersonalityDrawer] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <div className={styles.text}>{data.short_description}</div>
                <Button
                    className={styles.button}
                    onClick={() => setPersonalityDrawer(true)}
                >
                    Read More
                </Button>
            </div>
            <div className={styles.results}>
                <div className={styles.rowBordered}>
                    <div className={styles.columnBordered}>
                        <div className={styles.label}>
                            {constants.socialPreferences.title}
                        </div>
                        <Bar
                            labelA={constants.socialPreferences.labelA}
                            labelB={constants.socialPreferences.labelB}
                            percentage={data.social_preferences.introvert}
                            colorScheme={
                                constants.socialPreferences.colorScheme
                            }
                        />
                    </div>
                    <div className={styles.column}>
                        <div className={styles.label}>
                            {constants.takeInformation.title}
                        </div>
                        <Bar
                            labelA={constants.takeInformation.labelA}
                            labelB={constants.takeInformation.labelB}
                            percentage={data.take_information.sensing}
                            colorScheme={constants.takeInformation.colorScheme}
                        />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.columnBordered}>
                        <div className={styles.label}>
                            {constants.makeDecisions.title}
                        </div>
                        <Bar
                            labelA={constants.makeDecisions.labelA}
                            labelB={constants.makeDecisions.labelB}
                            percentage={data.make_decisions.feeling}
                            colorScheme={constants.makeDecisions.colorScheme}
                        />
                    </div>
                    <div className={styles.column}>
                        <div className={styles.label}>
                            {constants.liveOuterLife.title}
                        </div>
                        <Bar
                            labelA={constants.liveOuterLife.labelA}
                            labelB={constants.liveOuterLife.labelB}
                            percentage={data.live_outer_life.judging}
                            colorScheme={constants.liveOuterLife.colorScheme}
                        />
                    </div>
                </div>
            </div>
            <PersonalityDrawer
                data={data.long_description}
                visible={personalityDrawer}
                onClose={() => {
                    setPersonalityDrawer(false);
                }}
            />
        </div>
    );
};

export default Personality;
