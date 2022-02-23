/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import { User } from '../../../../types/Team';
import Avatar from '../../../../components/avatar/Avatar';
import styles from './Details.module.css';
import Progress from '../../../../components/data/progress/Progress';
import { constants } from './Details.constants';

type PropsType = {
  user: User;
  position: string;
  manager: string;
  team: string;
  activity: number;
};

const Details: React.FC<PropsType> = ({
  user,
  position,
  manager,
  team,
  activity,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.generalDetailsContainer}>
        <div className={styles.avatarContainer}>
          <Avatar user={user} size={constants.avatarSize} />
          <div
            className={styles.name}
          >{`${user.first_name} ${user.last_name}`}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <div>{constants.strings.position}</div>
            <div className={styles.value}>{position}</div>
          </div>
          <div className={styles.detail}>
            <div>{constants.strings.manager}</div>
            <div className={styles.value}>{manager}</div>
          </div>
          <div className={styles.detail}>
            <div>{constants.strings.team}</div>
            <div className={styles.value}>{team}</div>
          </div>
        </div>
      </div>
      <div className={styles.activityContainer}>
        <div className={styles.activityTitle}>{constants.strings.activity}</div>
        <Progress percentage={activity} />
      </div>
    </div>
  );
};

export default Details;
