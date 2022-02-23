// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Row } from "@doar/components";
// import MemberValue from "src/containers/dashboard-one/member-value";
import RowOne from "../../containers/dashboard-one/row-one";
import Layout from "../../layouts";
import Content from "../../layouts/content";
import TeamStore from "../../stores/teamStore";
import Radar from "../../components/data/radar/Radar";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
// import styles from "./Dashboard.module.less";
import MemberSelectWrapper from "./components/memberSelectWrapper/MemberSelectWrapper";
import Charecteristics from "./components/charecteristics/Charecteristics";
// import Wellbeing from "./components/wellbeing/Wellbeing";
import Feedbacks from "./components/feedbacks/Feedbacks";
import OverallWellbeing from "./components/overallWellbeing/OverallWellbeing";

const Dashboard = () => {
    const teamStore = useContext(TeamStore);
    const { team, feedbacks } = teamStore;

    
    return (
        <Layout>
            <Content>
                <Row gutters={10}>
                    <RowOne data={team?.wellbeing} />
                </Row>

                <MemberSelectWrapper
                    type="schwartz"
                    colorsAssigned
                    title="Values"
                    height={612}
                >
                    <Radar
                        data={teamStore.teamSchwartz.data}
                        keys={teamStore.teamSchwartz.keys}
                        height={500}
                        colors={teamStore.teamSchwartz.colors}
                    />
                </MemberSelectWrapper>

                <OverallWellbeing />

                <MemberSelectWrapper
                    type="big5"
                    title="Team characteristics"
                    height={1330}
                >
                    <Charecteristics />
                </MemberSelectWrapper>
                <CardWrapper title='Feedback' cardStyle={{ marginTop: 32 }}>
                    <Feedbacks data={feedbacks} />
                </CardWrapper>
            </Content>
        </Layout>
    );
};

export default observer(Dashboard);
