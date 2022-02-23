import React, { CSSProperties } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";
import styles from "./CardWrapper.module.css";

type PropsType = {
    children: React.ReactElement;
    title: string;
    infoIcon?: boolean;
    cardStyle?: CSSProperties;
    contentNoPadding?: boolean;
    noHeaderShadow?: boolean;
    infoIconClickAction?: () => void;
};
const CardWrapper: React.FC<PropsType> = ({
    children,
    title,
    infoIcon,
    cardStyle,
    contentNoPadding,
    noHeaderShadow,
    infoIconClickAction,
}) => {
    return (
        <div className={styles.container} style={cardStyle}>
            <div
                className={
                    noHeaderShadow ? styles.headerNoShadow : styles.header
                }
            >
                {infoIcon && (
                    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                    <div
                        className={styles.infoIcon}
                        onClick={infoIconClickAction}
                    >
                        <InfoCircleOutlined />
                    </div>
                )}
                <div className={styles.title}>{title}</div>
            </div>
            <div className={(!contentNoPadding && styles.content) || ""}>
                {children}
            </div>
        </div>
    );
};

export default CardWrapper;
