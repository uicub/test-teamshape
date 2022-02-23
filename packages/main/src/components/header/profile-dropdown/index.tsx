import React from "react";
import { Edit3, User, Package, LogOut } from "react-feather";
import {
    DropdownToggle,
    Dropdown,
    Avatar,
    AvatarInitial,
} from "@doar/components";
import image from "@doar/shared/images/img16.jpg";
import session from "../../../stores/sessionStore";
import {
    StyledDropMenu,
    StyledAuthorName,
    StyledDropItem,
    StyledDivider,
    StyledAvatar,
} from "./style";

const ProfileDropdown: React.FC = () => {
    const user = session.sessionUser;
    let profilePhoto = image;
    if (user) {
        profilePhoto = user.photo;
    }
    return (
        <Dropdown direction="down" className="dropdown-profile">
            <DropdownToggle variant="texted">
                <StyledAvatar size="sm" shape="circle">
                    <AvatarInitial>
                        <img src={profilePhoto} alt="user" />
                    </AvatarInitial>
                </StyledAvatar>
            </DropdownToggle>
            <StyledDropMenu>
                <Avatar size="lg" shape="circle">
                    <AvatarInitial>
                        <img src={profilePhoto} alt="user" />
                    </AvatarInitial>
                </Avatar>
                {session?.sessionUser && (
                    <StyledAuthorName>{`${session?.sessionUser.first_name} ${session?.sessionUser.last_name}`}</StyledAuthorName>
                )}
                <StyledDropItem path="/profile">
                    <Edit3 size="24" />
                    Profile
                </StyledDropItem>
                <StyledDropItem path="/account" mt="10px">
                    <User size="24" />
                    Account
                </StyledDropItem>
                <StyledDivider />
                <StyledDropItem path="/myplan" mt="10px">
                    <Package size="24" />
                    Subscription
                </StyledDropItem>

                <StyledDropItem
                    path="/login"
                    mt="10px"
                    onClick={() => {
                        session.logout();
                    }}
                >
                    <LogOut size="24" />
                    Sign Out
                </StyledDropItem>
            </StyledDropMenu>
        </Dropdown>
    );
};

export default ProfileDropdown;
