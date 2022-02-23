import { FC } from "react";
import { Row, Col } from "@doar/components";
import UserAvatar from "../../../components/widgets/user-avatar";
import UserDetails from "../../../components/widgets/user-details";
import { StyledWrap } from "./style";
import { User } from "../../../types/Team";

interface IUser {
    user: User | null;
}

const LeftSidebar: FC<IUser> = ({ user }) => {
    const profilePhoto = user?.photo;
    return (
        <StyledWrap>
            <Row>
                <Col sm={3} md={2} lg={12}>
                    <UserAvatar photo={profilePhoto} />
                </Col>
                <Col sm={8} md={7} lg={12} mt={["20px", "0px", null, "25px"]}>
                    <UserDetails user={user} />
                </Col>
            </Row>
        </StyledWrap>
    );
};

export default LeftSidebar;
