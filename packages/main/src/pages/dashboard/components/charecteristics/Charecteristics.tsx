// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
// import TeamBar from "..//components/data/teamBar/TeamBar";
import { Tooltip } from "antd";
import "antd/lib/tooltip/style/index.css";
import { InfoCircleOutlined } from "@ant-design/icons";
import TeamBar from "../../../../components/data/teamBar/TeamBar";
import {
    properties,
    strings,
    descriptions,
} from "../../../../constants/BigFive.constants";
import TeamStore from "../../../../stores/teamStore";
import styles from "./charecteristics.module.css";


const Charecteristics = () => {
    const teamStore = useContext(TeamStore);
    return (
        <div className={styles.container}>
          {Object.keys(properties).map((key) => (
            <div key={key} className={styles.characteristic}>
              <div className={styles.title}>
                {strings[key].label}
                <Tooltip title={descriptions[key]}>
                  <div className={styles.infoIcon}>
                    <InfoCircleOutlined />
                  </div>
                </Tooltip>
              </div>
              <div className={styles.description}>{strings[key].explanation}</div>
              <TeamBar
                members={teamStore.teamBigFive}
                property={key}
                labelA={
                  <div className={styles.label}>{properties[key].labelA}</div>
                }
                labelB={
                  <div className={styles.label}>{properties[key].labelB}</div>
                }
              />
            </div>
          ))}
        </div>
      );
    };
    
    export default observer(Charecteristics);