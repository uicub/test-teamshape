import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { List } from "antd";
// import "antd/lib/list/style/index.css";
import { status } from "../../../../constants/Statuses.constants";
import IconLabel from "../../../../components/labels/smallWithIcon/SmallLabelIcon";
import styles from "./TopTraits.module.css";

type PropsType = {
    data: string[];
};

const TopTraits: React.FC<PropsType> = ({ data }) => {
    return (
        <div className={styles.container}>
            <List
                grid={{ gutter: 16, column: 2 }}
                dataSource={data}
                renderItem={(dataItem) => (
                    <List.Item>
                        <IconLabel
                            text={dataItem}
                            Icon={<CheckCircleOutlined />}
                            type={status.success}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default TopTraits;
