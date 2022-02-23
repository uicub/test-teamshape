/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import styles from './SmallLabelIcon.module.css';

type PropsType = {
  text: string;
  Icon: React.ReactNode;
  type: string;
};
const SmallLabelIcon: React.FC<PropsType> = ({ text, Icon, type }) => {
  return (
    <div className={styles.item}>
      <div className={styles[`icon_${type}`]}>{Icon}</div>
      {text}
    </div>
  );
};

export default SmallLabelIcon;
