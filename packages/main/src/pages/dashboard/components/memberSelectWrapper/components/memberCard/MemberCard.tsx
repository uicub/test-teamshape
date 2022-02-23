/* eslint-disable no-param-reassign */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";

import { observer } from "mobx-react-lite";
import classnames from 'classnames';
import { Checkbox } from "antd";
import Avatar from "../../../../../../components/avatar/Avatar";
import { Member } from "../../../../../../types/Team";
import { constants } from "./MemberCard.constants";
import styles from "./MemberCard.module.css";
import "antd/lib/checkbox/style/index.css";

type PropsType = {
    member: Member;
    type: string;
    colorsAssigned?: boolean;
};

const MemberCard: React.FC<PropsType> = ({ member, colorsAssigned, type }) => {
  return (
    <div
      key={member.member.uid}
      className={classnames(styles.memberCard, {
        [styles[`checkedBorder${member.color}`]]:
          colorsAssigned && member[constants.properties[type]],
      })}
    >
      <div className={styles.checkboxContainer}>
        <Checkbox
          disabled={!member.member.test_completed}
          checked={member[constants.properties[type]]}
          onChange={(e) => {
            member[constants.properties[type]] = e.target.checked;
          }}
          className={classnames({
            [styles[`checked${member.color}`]]: colorsAssigned,
          })}
        />
      </div>
      <div className={styles.detailsContainer}>
        <Avatar user={member.member} team={member.member.uid === '1'} />
        <div
          className={styles.name}
        >{`${member.member.first_name} ${member.member.last_name}`}</div>
      </div>
    </div>
  );
};

export default observer(MemberCard);