import React from "react";
import useNoteContext from "../context/NoteContext";

// interface GridProp {
//   isEditting: boolean;
//   setIsEditting: React.Dispatch<React.SetStateAction<boolean>>;
// }

function Grid() {
  // Global State
  const { isEditting, setIsEditting } = useNoteContext();

  // Local State
  const [note, setNote] = React.useState("");
  const [editGrid, setEditGrid] = React.useState<boolean>(false);

  // Makes sure grids are not displaying input when global edit is off
  if (!isEditting) {
    if (editGrid) setEditGrid(false);
  }

  function handleKeys(key: string) {
    if (key === "Enter" || key === "Escape") {
      setEditGrid(false);
      setIsEditting(false);
    }
  }

  function handleEdit() {
    // If not editing, allow user to edit and lock other grid from editing
    if (!isEditting) {
      setEditGrid(true);
      setIsEditting(true);
    }

    // If editing, clicking will close current grid and unlock edit lock
    if (isEditting) {
      setEditGrid(false);
      setIsEditting(false);
    }
  }

  return (
    <li onClick={handleEdit}>
      {editGrid ? (
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={(e) => handleKeys(e.key)}
          autoFocus
        />
      ) : (
        note
      )}
    </li>
  );
}

export default Grid;
