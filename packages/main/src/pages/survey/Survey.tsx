/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import SurveyStore from '../../stores/surveyStore';
import Questions from './components/questions/Questions';
import Feedback from './components/feedback/Feedback';
import Success from './components/success/Success';

const Survey = () => {
  const surveyStore = useContext(SurveyStore);
  const { surveyId, userId } = useParams();

  useEffect(() => {
    if (surveyId && userId){
      if (!surveyStore.stepsNumber) {
        surveyStore.getSurvey(surveyId, userId);
      }
    }
  });
  if (surveyStore.completed) {
    return <Success />;
  }
  if (surveyStore.feedback) {
    return <Feedback />;
  }
  return <Questions />;
};

export default observer(Survey);
