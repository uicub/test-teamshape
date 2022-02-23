import { FC } from "react";
import { StyledLogo } from "./style";
import LogoImg from "../../assets/images/Logo.png";


const Logo: FC = () => {
    return (
        <StyledLogo path="/">
            <img
                src={LogoImg}
                height="24"
                className="logo-light-mode"
                alt=""
            />
        </StyledLogo>
    );
};

export default Logo;
