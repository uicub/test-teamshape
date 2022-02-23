/* eslint-disable react/no-array-index-key */
import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';
import cx from 'classnames';
import styles from './Steps.module.css';

type PropsType = {
  currentStep: number;
  totalSteps: number;
  label: string;
  mobile?: boolean;
};
const StepsProgress: React.FC<PropsType> = ({
  currentStep,
  totalSteps,
  label,
  mobile,
}) => {
  const arr = new Array(totalSteps).fill('');
  return (
    <div className={cx(styles.container, { [styles.containerMobile]: mobile })}>
      <div className={styles.stepsContainer}>
        <div className={styles.line} />
        <div className={styles.steps}>
          {arr.map((val, index) => (
            <div
              key={index}
              className={cx(styles.step, {
                [styles.stepActive]: currentStep - 1 >= index,
                [styles.stepMobile]: mobile,
              })}
            >
              <CheckCircleOutlined />
            </div>
          ))}
        </div>
      </div>
      <div
        className={cx(styles.stepsLabel, {
          [styles.stepsLabelMobile]: mobile,
        })}
      >
        {label}
      </div>
    </div>
  );
};

export default StepsProgress;
