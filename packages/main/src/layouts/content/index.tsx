import React from "react";
import { SpaceProps, BorderProps } from "@doar/shared/styled";
import { Container } from "@doar/components";
import { observer } from "mobx-react-lite";
import { StyledContent } from "./style";

interface IProps extends SpaceProps, BorderProps {
    className?: string;
    fullHeight?: boolean;
    align?: "top" | "center" | "bottom";
}

const Content: React.FC<IProps> = ({
    children,
    className,
    fullHeight,
    align,
    ...restProps
}) => {
    console.log("in content")
    return (
        <StyledContent
            $fullHeight={fullHeight}
            $align={align}
            className={className}
            {...restProps}
        >
            <Container className="" pl="0" pr="0">{/* container class removed */}
                {children}
            </Container>
        </StyledContent>
    );
};

export default observer(Content);
