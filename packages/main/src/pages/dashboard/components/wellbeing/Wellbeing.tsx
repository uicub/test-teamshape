import React from 'react';
import { observer } from 'mobx-react-lite';
import { Row, Col } from 'antd';
import Progress from '../../../../components/data/progress/Progress';
import styles from './Wellbeing.module.less';
import { constants, types } from './Wellbeing.constants';
import { Wellbeing } from '../../../../types/Team';

type PropsType = {
  data: Wellbeing | undefined;
};
const WellbeingView: React.FC<PropsType> = ({ data }) => {
  console.log(" style", styles)
  if (!data) {
    return null;
  }
  // eslint-disable-next-line array-callback-return
  return (
    <div className={styles.container}>
      <p>{styles.container}</p>
      <Row gutter={[32, 0]}>
        {Object.values(types).map((val) => (
          <Col key={val} span={6}>
            <div className={styles.colCard}>
              <div className={styles.title}>{constants.strings[val]}</div>
              <Progress
                percentage={data[val]}
                color={constants.colors[val]}
                extraText={
                  val === types.activity ? 'Filled Surveys' : undefined
                }
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default observer(WellbeingView);
