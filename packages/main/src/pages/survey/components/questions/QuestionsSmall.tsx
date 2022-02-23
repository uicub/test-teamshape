/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { MobileOnlyView, isMobileOnly, TabletView } from "react-device-detect";
import cx from "classnames";
import Steps from "../../../../components/steps/Steps";
import SurveyStore from "../../../../stores/surveyStore";
import Slider from "../../../../components/data/slider/Slider";
import { constants } from "./Questions.constants";
import styles from "./Questions.module.css";

interface Obj {
    labelA: string;
    labelB: string;
    disclaimer: string;
    next: string;
    back: string;
    of: string;
}

interface IConstants {
    en: Obj;
    lt: Obj;
}

const QuestionsSmall = () => {
    const surveyStore = useContext(SurveyStore);
    return (
        <div
            className={cx(styles.containerMobile, {
                [styles.containerTablet]: !isMobileOnly,
            })}
        >
            <div
                className={cx(styles.question, {
                    [styles.questionMobile]: isMobileOnly,
                })}
            >
                {surveyStore?.question?.question}
            </div>
            <Slider
                value={surveyStore?.question?.answer}
                labelA={
                    constants.strings[surveyStore.language as keyof IConstants]
                        .labelA
                }
                labelB={
                    constants.strings[surveyStore.language as keyof IConstants]
                        .labelB
                }
                onChange={(val) => surveyStore.setAnswer(val)}
                mobile
                buttonsBottom={isMobileOnly}
            />
            <div
                className={cx(styles.disclaimer, {
                    [styles.disclaimerMobile]: isMobileOnly,
                })}
            >
                {
                    constants.strings[surveyStore.language as keyof IConstants]
                        .disclaimer
                }
            </div>
            <MobileOnlyView className={styles.stepsMobileContainer}>
                <div className={styles.mobileNavigateArrows}>
                    <div
                        className={cx(
                            styles.navigateArrow,
                            styles.navigateArrowMobile
                        )}
                    >
                        {surveyStore.back && (
                            <div
                                className={styles.navigationContainer}
                                onClick={surveyStore.onBack}
                            >
                                <ArrowLeftOutlined className={styles.icon} />
                                {
                                    constants.strings[
                                        surveyStore.language as keyof IConstants
                                    ].back
                                }
                            </div>
                        )}
                    </div>
                    <div
                        className={cx(
                            styles.navigateArrow,
                            styles.navigateArrowMobile
                        )}
                    >
                        {surveyStore.next && (
                            <div
                                className={styles.navigationContainer}
                                onClick={surveyStore.onNext}
                            >
                                {
                                    constants.strings[
                                        surveyStore.language as keyof IConstants
                                    ].next
                                }
                                <ArrowRightOutlined className={styles.icon} />
                            </div>
                        )}
                    </div>
                </div>
                <Steps
                    currentStep={surveyStore.step}
                    totalSteps={surveyStore.stepsNumber}
                    label={`${surveyStore.step} ${
                        constants.strings[
                            surveyStore.language as keyof IConstants
                        ].of
                    } ${surveyStore.stepsNumber}`}
                    mobile
                />
            </MobileOnlyView>
            <TabletView className={styles.stepsContainer}>
                <div className={styles.navigateArrow}>
                    {surveyStore.back && (
                        <div
                            className={styles.navigationContainer}
                            onClick={surveyStore.onBack}
                        >
                            <ArrowLeftOutlined className={styles.icon} />
                            {
                                constants.strings[
                                    surveyStore.language as keyof IConstants
                                ].back
                            }
                        </div>
                    )}
                </div>

                <Steps
                    currentStep={surveyStore.step}
                    totalSteps={surveyStore.stepsNumber}
                    label={`${surveyStore.step} ${
                        constants.strings[
                            surveyStore.language as keyof IConstants
                        ].of
                    } ${surveyStore.stepsNumber}`}
                />
                <div className={styles.navigateArrow}>
                    {surveyStore.next && (
                        <div
                            className={styles.navigationContainer}
                            onClick={surveyStore.onNext}
                        >
                            {
                                constants.strings[
                                    surveyStore.language as keyof IConstants
                                ].next
                            }
                            <ArrowRightOutlined className={styles.icon} />
                        </div>
                    )}
                </div>
            </TabletView>
        </div>
    );
};

export default observer(QuestionsSmall);
