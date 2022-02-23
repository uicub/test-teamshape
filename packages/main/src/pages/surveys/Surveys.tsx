/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Table, Button } from "antd";
import "antd/lib/pagination/style/index.css";
import "antd/lib/table/style/index.css";
import "antd/lib/button/style/index.css";
import moment from "moment";
import cx from "classnames";
import Layout from "../../layouts";
import Content from "../../layouts/content";
import { SurveyFull } from "../../types/Surveys";
import TeamSurveysStore from "../../stores/surveysStore";
import TeamStore from "../../stores/teamStore";
import SurveyDrawer from "./components/SurveyDrawer";
import styles from "./Surveys.module.css";

const Surveys = () => {
    const teamStore = useContext(TeamStore);
    const surveysStore = useContext(TeamSurveysStore);
    const { team } = teamStore;
    surveysStore.teamId = team?.uid || "";
    const [surveyDrawer, setSurveyDrawer] = useState(false);
    const [surveyData, setSurveyData] = useState({} as SurveyFull);
    const columns = [
        {
            title: "Survey name",
            dataIndex: "type",
            key: "name",
            render: (
                value: unknown,
                row: {
                    starts_at: moment.MomentInput;
                    ends_at: moment.MomentInput;
                }
            ) =>
                `${value} ${moment(row.starts_at).format(
                    "YYYY/MM/DD"
                )} - ${moment(row.ends_at).format("YYYY/MM/DD")}`,
            sorter: (
                a: {
                    type: unknown;
                    starts_at: moment.MomentInput;
                    ends_at: moment.MomentInput;
                },
                b: {
                    type: unknown;
                    starts_at: moment.MomentInput;
                    ends_at: moment.MomentInput;
                }
            ) => {
                const aName = `${a.type} ${moment(a.starts_at).format(
                    "YYYY/MM/DD"
                )} - ${moment(a.ends_at).format("YYYY/MM/DD")}`;
                const bName = `${b.type} ${moment(b.starts_at).format(
                    "YYYY/MM/DD"
                )} - ${moment(b.ends_at).format("YYYY/MM/DD")}`;
                return aName.localeCompare(bName);
            },
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (
                value:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined
            ) => {
                return {
                    children: (
                        <div
                            className={cx(
                                styles.status,
                                styles[`status${value}`]
                            )}
                        >
                            {value}
                        </div>
                    ),
                };
            },
            sorter: (a: { status: string }, b: { status: string }) =>
                a.status.localeCompare(b.status),
        },
        {
            title: "Create Date",
            dataIndex: "created_at",
            key: "date",
            render: (value: moment.MomentInput) =>
                moment(value).format("YYYY-MM-DD"),
            sorter: (
                a: { created_at: moment.MomentInput },
                b: { created_at: moment.MomentInput }
            ) =>
                moment(a.created_at, "YYYY MM DD").valueOf() -
                moment(b.created_at, "YYYY MM DD").valueOf(),
        },
    ];
    const dataSource = surveysStore.surveys;
    return (
        <>
            <Layout>
                <Content>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <div className={styles.title}>Surveys</div>
                            <div className={styles.addnewBtn}>
                                <Button type="primary" href="/newsurvey">
                                    Crate New Survey
                                </Button>
                            </div>
                        </div>
                        <div className={styles.table}>
                            <Table
                                dataSource={dataSource}
                                columns={columns}
                                rowKey="uid"
                                pagination={{ size: "small", pageSize: 8 }}
                                onRow={(record) => {
                                    return {
                                        onClick: () => {
                                            setSurveyData(record);
                                            setSurveyDrawer(true);
                                        },
                                    };
                                }}
                            />
                        </div>
                        <SurveyDrawer
                            data={surveyData}
                            visible={surveyDrawer}
                            onClose={() => {
                                setSurveyDrawer(false);
                            }}
                        />
                    </div>
                </Content>
            </Layout>
        </>
    );
};

export default observer(Surveys);
