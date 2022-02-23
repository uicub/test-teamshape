/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import moment from 'moment';
import Feedback from '../../../components/note/Note';
import { SurveyFull } from "../../../types/Surveys";
import Slider from '../../../components/data/slider/Slider';
import Drawer from "../../../components/drawer/Drawer";
import { constants } from './SurveyDrawer.constants';
import styles from './SurveyDrawer.module.css';

type PropsType = {
  data: SurveyFull;
  visible: boolean;
  onClose: () => void;
};

const SurveyDrawer: React.FC<PropsType> = ({ data, visible, onClose }) => {
  if (!Object.keys(data).length) {
    return null;
  }
  return (
    <Drawer
      title={`${data.type} ${moment(data.starts_at).format(
        constants.general.dateFormat
      )} - ${moment(data.ends_at).format(constants.general.dateFormat)}`}
      onClose={onClose}
      visible={visible}
    >
      <div className={styles.container}>
        {data?.questions &&
          Object.keys(data.questions).map((key) => (
            <div key={key} className={styles.questionContainer}>
              <div className={styles.question}>{data.questions[key]}</div>
              <Slider
                value={(data?.answers[key] && data?.answers[key]) || 0}
                labelA={constants.strings.labelA}
                labelB={constants.strings.labelB}
                square
                small
              />
            </div>
          ))}
        <div>
          <div className={styles.feedbackTitle}>
            {constants.strings.feedback}
          </div>
          {data?.feedbacks &&
            !!data.feedbacks.length &&
            data.feedbacks.map((fdata) => (
              <Feedback
                key={fdata.uid}
                note={fdata.text}
                user={fdata.author}
                date={fdata.created_at}
                anonymous={fdata.anonymous}
              />
            ))}
        </div>
      </div>
    </Drawer>
  );
};

export default SurveyDrawer;
