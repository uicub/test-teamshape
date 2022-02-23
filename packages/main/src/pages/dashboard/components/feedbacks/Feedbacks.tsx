import React from 'react';
import { observer } from 'mobx-react-lite';
import { Empty } from 'antd';
import "antd/lib/empty/style/index.css";
import { Feedback as FeedbackType } from '../../../../types/Notes';
import Feedback from '../../../../components/note/Note';

type PropsType = {
  data: FeedbackType[];
};
const Feedbacks: React.FC<PropsType> = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <div>
      {(!!data?.length &&
        data.map((feedback) => (
          <Feedback
            key={feedback.uid}
            note={feedback.text}
            user={feedback.author}
            date={feedback.created_at}
            anonymous={feedback.anonymous}
          />
        ))) || <Empty description="Team has no feedback" />}
    </div>
  );
};

export default observer(Feedbacks);
