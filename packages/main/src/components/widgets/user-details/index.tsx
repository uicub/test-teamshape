import { FC } from "react";
import { StyledName, StyledUserName } from "./style";
import { User } from "../../../types/Team";

interface IUser {
    user: User | null;
}

const UserDetails: FC<IUser> = ({ user }) => {
    return (
        <>
            <StyledName>
                {user?.first_name} {user?.last_name}
            </StyledName>
            <StyledUserName>{user?.email}</StyledUserName>
        </>
    );
};

export default UserDetails;
