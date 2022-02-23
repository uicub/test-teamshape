/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useContext } from 'react';
import { Form, Input, Button, message } from 'antd';
import "antd/lib/form/style/index.css";
import "antd/lib/input/style/index.css";
import "antd/lib/button/style/index.css";
import "antd/lib/message/style/index.css";
import NotesStore from '../../../../stores/notesStore';
import styles from './NewNote.module.css';
import { constants } from './NewNote.constants';

type PropsType = {
  userId?: string;
};

const NewNote: React.FC<PropsType> = ({ userId }) => {
  const notesStore = useContext(NotesStore);
  const [form] = Form.useForm();
  return (
    <div className={styles.container}>
      <Form
        form={form}
        name={constants.formName}
        onFinish={(prop) => {
          notesStore.postUserNote(userId, prop).then((resp) => {
            if (resp?.success) {
              form.resetFields();
              message.success(constants.messages.success);
            } else {
              message.error(constants.messages.error);
            }
          });
        }}
      >
        <Form.Item
          name="text"
          rules={[{ required: true, message: constants.messages.inputError }]}
        >
          <Input.TextArea className={styles.textInput} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {constants.button}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewNote;
