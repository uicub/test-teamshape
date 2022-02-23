import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import TeamStore from "../../stores/teamStore";
import Feedbacks from "../dashboard/components/feedbacks/Feedbacks";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import Layout from "../../layouts";
import Content from "../../layouts/content";

const Feedback: React.FC = () => {
    const teamStore = useContext(TeamStore);
    const { feedbacks } = teamStore;
    return (
        <>
            <Layout>
                <Content>
                    <CardWrapper title="Feedback" cardStyle={{ marginTop: 32 }}>
                        <Feedbacks data={feedbacks} />
                    </CardWrapper>
                </Content>
            </Layout>
        </>
    );
};

export default observer(Feedback);
