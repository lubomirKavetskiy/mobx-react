import React, { useState } from "react";
import { useNotesStore } from "./NotesContext";

export const NewNoteForm = () => {
  const [value, setValue] = useState("");
  const notesStore = useNotesStore();
  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button
        onClick={() => {
          if (value) {
            setValue("");
            notesStore.addNote(value);
          }
        }}
      >
        add note
      </button>
    </>
  );
};
