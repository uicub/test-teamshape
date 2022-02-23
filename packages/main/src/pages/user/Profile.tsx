import React from "react";
import { Media, MediaBody } from "@doar/components";
import { observer } from "mobx-react-lite";
import Layout from "../../layouts";
import Content from "../../layouts/content";
import LeftSidebar from "../../containers/profile-view/left-sidebar";
import MainContent from "../../containers/profile-view/main";
import session from "../../stores/sessionStore";

const Profile: React.FC = () => {
    return (
        <>
            <Layout>
                <Content p={[null, null, null, "40px 0"]}>
                    <Media display={["block", null, null, "flex"]}>
                        <LeftSidebar user={session?.sessionUser} />
                        <MediaBody
                            mt={["40px", null, null, 0]}
                            px={[null, null, null, "10px"]}
                        >
                            <MainContent />
                        </MediaBody>
                    </Media>
                </Content>
            </Layout>
        </>
    );
};

export default observer(Profile);
