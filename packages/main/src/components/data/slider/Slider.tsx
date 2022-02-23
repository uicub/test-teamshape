/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import cx from 'classnames';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import styles from './Slider.module.css';
import { constants } from './Slider.constants';

type PropsType = {
  value: number;
  labelA: string;
  labelB: string;
  onChange?: (val: string) => void;
  disabled?: boolean;
  square?: boolean;
  small?: boolean;
  buttonsBottom?: boolean;
  mobile?: boolean;
};
const Slider: React.FC<PropsType> = ({
  value,
  labelA,
  labelB,
  onChange,
  disabled,
  square,
  small,
  buttonsBottom,
  mobile,
}) => {
  const array = new Array(constants.range).fill('');
  return (
    <div
      className={cx(styles.container, {
        [styles.square]: square,
        [styles.small]: small,
        [styles.mobile]: mobile,
        [styles.bottomButtons]: buttonsBottom,
      })}
    >
      {mobile && !buttonsBottom && (
        <div
          className={cx(styles.changeButton, styles.changeButtonMinus)}
          onClick={() => {
            if (value > constants.min) {
              const val = value - 1;
              !!onChange && onChange(val.toString());
            }
          }}
        >
          <MinusOutlined style={{ fontSize: 20, color: '#73738c' }} />
        </div>
      )}
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={constants.min}
          max={constants.range}
          value={value}
          className={styles.slider}
          id="myRange"
          onInput={(event) =>
            !disabled &&
            !!onChange &&
            onChange((event.target as HTMLInputElement).value)
          }
         />

        <div className={styles.markers}>
          {array.map((val, index) => (
            <div key={index} className={styles.separators} />
          ))}
        </div>
        <div
          className={cx(styles.labelContainer, {
            [styles.labelSmall]: small,
            [styles.labelBottomButtons]: buttonsBottom,
          })}
        >
          <div>{labelA}</div>
          <div>{labelB}</div>
        </div>
      </div>
      {mobile && !buttonsBottom && (
        <div
          className={cx(styles.changeButton, styles.changeButtonPlus)}
          onClick={() => {
            if (value < constants.range) {
              const val = value + 1;
              !!onChange && onChange(val.toString());
            }
          }}
        >
          <PlusOutlined style={{ fontSize: 20, color: '#2057FF' }} />
        </div>
      )}
      {buttonsBottom && (
        <div className={styles.bottomButtonsContainer}>
          <div
            className={cx(styles.changeButton, styles.changeButtonMinus)}
            onClick={() => {
              if (value > constants.min) {
                const val = value - 1;
                !!onChange && onChange(val.toString());
              }
            }}
          >
            <MinusOutlined style={{ fontSize: 20, color: '#73738c' }} />
          </div>
          <div
            className={cx(styles.changeButton, styles.changeButtonPlus)}
            onClick={() => {
              if (value < constants.range) {
                const val = value + 1;
                !!onChange && onChange(val.toString());
              }
            }}
          >
            <PlusOutlined style={{ fontSize: 20, color: '#2057FF' }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
