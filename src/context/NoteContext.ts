import React from "react";
import { NoteContext } from "./NoteProvider";

function useNoteContext() {
  const context = React.useContext(NoteContext);
  if (context === undefined) {
    throw new Error("Context not allowed to be used outside the provider.");
  }
  return context;
}

export default useNoteContext;
