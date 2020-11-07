import { NewNoteForm } from "./NewNoteForm";
import { useNotesStore } from "./NotesContext";
import { Observer } from "mobx-react";

function App() {
  const notesStore = useNotesStore();

  return (
    <Observer>
      {() => (
        <>
          <ul>
            {notesStore.notes.map(({ note, id }) => (
              <li key={id} onClick={() => notesStore.delNote(id)}>
                {note}
              </li>
            ))}
          </ul>

          <NewNoteForm />
        </>
      )}
    </Observer>
  );
}

export default App;
