import React from "react";
import useNoteContext from "../context/NoteContext";

// interface GridProp {
//   currentGrid: number | null;
//   setCurrentGrid: React.Dispatch<React.SetStateAction<number | null>>;
//   id: number;
// }

function Grid() {
  // Global State
  const { isEditting, setIsEditting } = useNoteContext();

  // Local State
  const [note, setNote] = React.useState("");
  const [editGrid, setEditGrid] = React.useState(false);

  // Makes sure grids are not displaying input when global edit is off
  if (!isEditting) {
    if (editGrid) setEditGrid(false);
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

  // function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
  //   if (e.key == "Enter") {
  //     e.stopPropagation();
  //     setEditGrid(false);
  //   }
  // }

  return (
    <li onClick={handleEdit}>
      {editGrid ? (
        <input
          name="input"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          // onKeyDown={(e) => handleKey(e)}
          autoFocus
        />
      ) : (
        note
      )}
    </li>
  );
}

export default Grid;
