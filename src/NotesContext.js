import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react";

import { createNotesStore } from "./notesStore";

const NotesContext = createContext(null);

export const NotesProvider = ({ children }) => {
  const notesStore = useLocalObservable(createNotesStore);

  return (
    <NotesContext.Provider value={notesStore}>{children}</NotesContext.Provider>
  );
};

export const useNotesStore = () => useContext(NotesContext);
