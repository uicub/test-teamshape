import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Button, Checkbox } from "antd";
import classnames from "classnames";
import { constants } from "./MemberSelectWrapper.constants";
import TeamStore from "../../../../stores/teamStore";
import MemberCard from "./components/memberCard/MemberCard";
import * as styles from "./MemberSelectWrapper.module.css";
import "antd/lib/button/style/index.css";
import "antd/lib/checkbox/style/index.css";

type PropsType = {
    children: React.ReactElement;
    type: string;
    colorsAssigned?: boolean;
    title: string;
    height: number;
};

const MemberSelectWrapper: React.FC<PropsType> = ({
    children,
    type,
    colorsAssigned,
    title,
    height,
}) => {
    const teamStore = useContext(TeamStore);
    return (
      <div className={styles.container}>
      <div className={styles.membersContainer}>
        <div className={classnames(styles.header, styles.memberHeader)}>
          {constants.strings.members}
          {teamStore.members.length > 20 ? (
            <div>
              <Button
                className={styles.button}
                onClick={() =>
                  teamStore.onCheckAllChange(type, {
                    target: { checked: false },
                  })
                }
                disabled={
                  type === 'schwartz'
                    ? !teamStore.checkedSchwartz.length
                    : !teamStore.checkedBigFive.length
                }
              >
                Deselect All
              </Button>
            </div>
          ) : (
            <div>
              <Checkbox
                indeterminate={teamStore.indeterminate(type)}
                onChange={(val) => teamStore.onCheckAllChange(type, val)}
                checked={teamStore.checkAll(type)}
              >
                Select All
              </Checkbox>
            </div>
          )}
        </div>
        <div className={styles.content} style={{ height }}>
          <div className={classnames(styles.col, styles.col1)}>
            {teamStore.col1Members.map((member) => (
              <MemberCard
                key={member.member.uid}
                member={member}
                type={type}
                colorsAssigned={colorsAssigned}
              />
            ))}
          </div>
          <div className={styles.col}>
            {teamStore.col2Members.map((member) => (
              <MemberCard
                key={member.member.uid}
                member={member}
                type={type}
                colorsAssigned={colorsAssigned}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.element}>
        <div className={styles.header}>{title}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default observer(MemberSelectWrapper);