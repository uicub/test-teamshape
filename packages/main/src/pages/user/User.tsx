import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { User } from "../../types/Team";
import CardWrapper from "../../components/cardWrapper/CardWrapper";
import TeamStore from "../../stores/teamStore";
import { constants } from "./User.constants";
import styles from "./User.module.css";
// Components
import Details from "./components/details/Details";
import TopTraits from "./components/topTraits/TopTraits";
import Personality from "./components/personality/Personality";
import PersonalCharacteristics from "./components/personalCharacteristics/PersonalCharacteristics";
import Values from "./components/values/Values";
import NewNote from "./components/newNote/NewNote";
import Notes from "./components/notes/Notes";
import Layout from "../../layouts";
import Content from "../../layouts/content";

const UserView = () => {
    const { id } = useParams();
    const teamStore = useContext(TeamStore);
    const user: User = teamStore.getUser(id);
    const manager = teamStore.managerName || "";
    const team = teamStore.teamName || "";

    if (!user || !user.test_results || !Object.keys(user.test_results).length) {
        return null;
    }
    const schwartzData = teamStore.getSchwartzData(
        user.test_results.schwartz.answers,
        `${user.first_name} ${user.last_name}`
    );
    const keys = [`${user.first_name} ${user.last_name}`];

    return (
        <Layout>
            <Content>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <Details
                                user={user}
                                position="No data"
                                activity={user.activity}
                                manager={manager}
                                team={team}
                            />
                            <CardWrapper
                                title={constants.strings.topTraits}
                                infoIcon
                                cardStyle={{ marginTop: constants.margin }}
                            >
                                <TopTraits
                                    data={user.test_results.jungian.traits}
                                />
                            </CardWrapper>
                        </div>
                        <CardWrapper
                            title={constants.strings.personality}
                            cardStyle={{
                                marginLeft: constants.marginSm,
                                marginBottom: constants.margin,
                            }}
                        >
                            <Personality data={user.test_results.jungian} />
                        </CardWrapper>
                    </div>
                    <div className={styles.row}>
                        <CardWrapper
                            title={constants.strings.personalCharacteristics}
                            infoIcon
                            cardStyle={{
                                marginRight: constants.marginSm,
                                marginBottom: constants.margin,
                            }}
                            contentNoPadding
                        >
                            <PersonalCharacteristics
                                data={user.test_results.bigfive}
                            />
                        </CardWrapper>
                        <CardWrapper
                            title={constants.strings.values}
                            infoIcon
                            cardStyle={{
                                marginLeft: constants.marginSm,
                                marginBottom: constants.margin,
                            }}
                            contentNoPadding
                        >
                            <Values
                                data={schwartzData}
                                keys={keys}
                                motivated={
                                    user.test_results.schwartz.motivated_by
                                }
                                demotivated={
                                    user.test_results.schwartz.demotivated_by
                                }
                            />
                        </CardWrapper>
                    </div>
                    <div className={styles.rowDiffHeight}>
                        <CardWrapper
                            title={constants.strings.notes}
                            cardStyle={{ marginRight: constants.marginSm }}
                        >
                            <Notes userId={id} />
                        </CardWrapper>
                        <CardWrapper
                            title={constants.strings.leaveNote}
                            cardStyle={{ marginLeft: constants.marginSm }}
                            contentNoPadding
                            noHeaderShadow
                        >
                            <NewNote userId={id} />
                        </CardWrapper>
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default observer(UserView);
