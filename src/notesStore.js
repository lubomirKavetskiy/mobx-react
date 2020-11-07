import { nanoid } from "nanoid";

export const createNotesStore = () => ({
  notes: [],
  addNote(note) {
    this.notes.push({ note, id: nanoid() });
  },
  delNote(noteId) {
    this.notes = this.notes.filter(({ id }) => id !== noteId);
  }
});
