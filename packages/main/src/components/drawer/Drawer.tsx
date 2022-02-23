import React from "react";
import { Drawer } from "antd";
import "antd/lib/drawer/style/index.css";
import styles from "./Drawer.module.css";

type PropsType = {
    children: React.ReactElement;
    onClose: () => void;
    visible: boolean;
    title: string;
};
const CardWrapper: React.FC<PropsType> = ({
    children,
    title,
    onClose,
    visible,
}) => {
    return (
        <Drawer
            title={<div className={styles.title}>{title}</div>}
            placement="right"
            onClose={onClose}
            visible={visible}
            width={670}
            headerStyle={{ height: 75, boxShadow: "0px 15px 40px #16195E1F" }}
        >
            {children}
        </Drawer>
    );
};

export default CardWrapper;
