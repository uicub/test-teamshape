/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Checkbox, Input, Button } from "antd";
import "antd/lib/checkbox/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import { useParams } from "react-router-dom";
import cx from "classnames";
import { isMobileOnly, isTablet, isMobile } from "react-device-detect";
import SurveyStore from "../../../../stores/surveyStore";
import { constants } from "./Feedback.constants";
import styles from "./Feedback.module.css";

interface Obj {
    title: string;
    description: string;
    placeholder: string;
    anonymous: string;
    button: string;
    skip: string;
    emptyFeedback: string;
}

interface IConstants {
    en: Obj;
    lt: Obj;
}

type FeedbackParams = {
    surveyId: string;
    userId: string;
};

const Feedback = () => {
    const surveyStore = useContext(SurveyStore);
    const [feedBack, setFeedback] = useState("");
    const [anonymous, setAnonymous] = useState(false);
    const { surveyId, userId } = useParams<FeedbackParams>();
    return (
        <div
            className={cx(styles.container, {
                [styles.containerTablet]: isTablet,
                [styles.containerMobile]: isMobile,
            })}
        >
            <div
                className={cx(styles.feedbackBox, {
                    [styles.feedbackBoxMobile]: isMobile,
                })}
            >
                <div className={styles.title}>
                    {
                        constants.strings[
                            surveyStore.language as keyof IConstants
                        ].title
                    }
                </div>
                <div className={styles.description}>
                    {
                        constants.strings[
                            surveyStore.language as keyof IConstants
                        ].description
                    }
                </div>
                <div
                    className={cx(styles.textContainer, {
                        [styles.textContainerMobile]: isMobileOnly,
                    })}
                >
                    <Input.TextArea
                        placeholder={
                            constants.strings[
                                surveyStore.language as keyof IConstants
                            ].placeholder
                        }
                        className={styles.textInput}
                        value={feedBack}
                        onChange={(e) =>
                            setFeedback((e.target as HTMLTextAreaElement).value)
                        }
                    />
                </div>
                <div className={styles.buttonsContainer}>
                    <div className={styles.checkboxContainer}>
                        <Checkbox
                            checked={anonymous}
                            onChange={(e) => setAnonymous(e.target.checked)}
                        >
                            {
                                constants.strings[
                                    surveyStore.language as keyof IConstants
                                ].anonymous
                            }
                        </Checkbox>
                    </div>
                    <div className={styles.submitContainer}>
                        <Button
                            type="primary"
                            onClick={() =>
                                surveyStore.submitWithFeedback(
                                    feedBack,
                                    anonymous,
                                    surveyId,
                                    userId
                                )
                            }
                        >
                            {
                                constants.strings[
                                    surveyStore.language as keyof IConstants
                                ].button
                            }
                        </Button>
                        <div
                            className={styles.skipFeedback}
                            onClick={() => surveyStore.submit(surveyId, userId)}
                        >
                            {
                                constants.strings[
                                    surveyStore.language as keyof IConstants
                                ].skip
                            }
                        </div>
                    </div>
                </div>
                {!!surveyStore.submitError && (
                    <div className={styles.errorContainer}>
                        {/* {constants.strings[surveyStore.language as keyof IConstants][surveyStore.submitError]} */}
                        {surveyStore.submitError}
                    </div>
                )}
            </div>
        </div>
    );
};

export default observer(Feedback);
