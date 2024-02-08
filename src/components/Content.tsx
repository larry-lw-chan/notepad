import React from "react";
import useGlobalContext from "../context/GlobalContext";
import { NUM_OF_GRID } from "./ContentList";

interface ContentProp {
  currentGrid: number | null;
  setCurrentGrid: React.Dispatch<React.SetStateAction<number | null>>;
  content: string;
  id: number;
}

function Content({ content, currentGrid, setCurrentGrid, id }: ContentProp) {
  // Global State
  const { isEditting, setIsEditting } = useGlobalContext();

  // Local State
  const [note, setNote] = React.useState(content);

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
    e.stopPropagation();
    switch (e.key) {
      case "Enter":
      case "ArrowDown":
        if (id < NUM_OF_GRID - 1) setCurrentGrid(id + 1);
        break;
      case "ArrowUp":
        if (id > 0) setCurrentGrid(id - 1);
        break;
      case "Escape":
        setCurrentGrid(null);
        break;
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

export default Content;
