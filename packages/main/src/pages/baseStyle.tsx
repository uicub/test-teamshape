import styled, { themeGet, device } from "@doar/shared/styled";
import { CardHeader, Button } from "@doar/components";

export const StyledCardTitle = styled.h6`
    font-size: 11px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-weight: 600;
    color: ${themeGet("colors.text2")};
    margin-bottom: 8px;
`;

export const StyledCardHeader = styled(({ ...props }) => (
    <CardHeader {...props} />
))`
    padding-top: 20px;
    padding-bottom: 0px;
    border-bottom: 0;
`;

export const StyledButton = styled((props) => <Button {...props} />)`
    text-transform: uppercase;
    font-size: 10px;
    line-height: 1.773;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: 600;
    letter-spacing: 0.5px;
    ${device.small} {
        font-size: 11px;
        padding-left: 15px;
        padding-right: 15px;
    }
`;