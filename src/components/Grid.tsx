import React from "react";
import useNoteContext from "../context/NoteContext";
import { NUM_OF_GRID } from "./GridList";

interface GridProp {
  currentGrid: number | null;
  setCurrentGrid: React.Dispatch<React.SetStateAction<number | null>>;
  id: number;
}

function Grid({ currentGrid, setCurrentGrid, id }: GridProp) {
  // Global State
  const { isEditting, setIsEditting } = useNoteContext();

  // Local State
  const [note, setNote] = React.useState("");

  // Derived State
  const editGrid = isEditting && currentGrid === id ? true : false;

  function handleEdit() {
    // If not editing, allow user to edit and lock other grid from editing
    if (!isEditting) {
      setCurrentGrid(id);
      setIsEditting(true);
    }

    // If editing, clicking will close current grid and unlock edit lock
    if (isEditting) {
      setCurrentGrid(null);
      setIsEditting(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      e.stopPropagation();
      if (id < NUM_OF_GRID - 1) {
        setCurrentGrid(id + 1);
      }
    }
  }

  return (
    <li onClick={handleEdit}>
      {editGrid ? (
        <input
          name="input"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => handleKey(e)}
          autoFocus
        />
      ) : (
        note
      )}
    </li>
  );
}

export default Grid;
