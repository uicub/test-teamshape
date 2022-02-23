/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Result } from "antd";
import { isMobile } from "react-device-detect";
import Steps from "../../../../components/steps/Steps";
import Slider from "../../../../components/data/slider/Slider";
import SurveyStore from "../../../../stores/surveyStore";
import { constants } from "./Questions.constants";
import styles from "./Questions.module.css";
import QuestionsSmall from "./QuestionsSmall";

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

const Questions = () => {
    const surveyStore = useContext(SurveyStore);
    if (surveyStore.error) {
        return (
            <div className={styles.errorContainer}>
                <Result
                    status={surveyStore.errorData?.number}
                    title={surveyStore.errorData?.number}
                    subTitle={
                        <div className={styles.title}>
                            {surveyStore.errorData?.text}
                        </div>
                    }
                />
            </div>
        );
    }
    if (isMobile) {
        return <QuestionsSmall />;
    }
    return (
        <div className={styles.container}>
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

            <div className={styles.questionsContainer}>
                <div className={styles.question}>
                    {surveyStore?.question?.question}
                </div>
                <Slider
                    value={surveyStore?.question?.answer}
                    labelA={
                        constants.strings[
                            surveyStore.language as keyof IConstants
                        ].labelA
                    }
                    labelB={
                        constants.strings[
                            surveyStore.language as keyof IConstants
                        ].labelB
                    }
                    onChange={(val) => surveyStore.setAnswer(val)}
                />
                <div className={styles.disclaimer}>
                    {
                        constants.strings[
                            surveyStore.language as keyof IConstants
                        ].disclaimer
                    }
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
            </div>

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
        </div>
    );
};

export default observer(Questions);
