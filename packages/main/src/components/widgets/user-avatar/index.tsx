import { FC } from "react";
import { Avatar } from "@doar/components";
import image from "@doar/shared/images/img16.jpg";

interface ProfilePhoto {
    photo: string | undefined
}

const UserAvatar: FC<ProfilePhoto> = ({photo}) => {
    let ProfileImage = image
    if(photo){
        ProfileImage = photo 
    }

    return (
        <Avatar size="xxl" status="online">
            <img src={ProfileImage} alt="user" />
        </Avatar>
    );
};

export default UserAvatar;
