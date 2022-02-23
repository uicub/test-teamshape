import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Note } from '../../../../types/Notes';
import NoteView from '../../../../components/note/Note';
import NotesStore from '../../../../stores/notesStore';
import styles from './Notes.module.less';

type PropsType = {
  userId?: string;
};
const Notes: React.FC<PropsType> = ({ userId }) => {
  const notesStore = useContext(NotesStore);
  notesStore.userId = userId;
  const { notes } = notesStore;
  return (
    <div className={styles.container}>
      {notes &&
        notes.map((note: Note) => (
          <NoteView
            key={note.uid}
            note={note.text}
            user={note.author}
            date={note.created_at}
          />
        ))}
    </div>
  );
};

export default observer(Notes);
