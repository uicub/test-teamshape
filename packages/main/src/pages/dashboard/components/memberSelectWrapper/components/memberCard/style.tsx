import styled, {
    themeGet,
    space,
    SpaceProps,
    device,
    css,
} from "@doar/shared/styled";
import { CardHeader, CardFooter } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledTitle = styled.h6`
    margin-bottom: 0px;
`;

export const StyledHeaderRight = styled.div`
    font-size: 18px;
    display: flex;
`;
