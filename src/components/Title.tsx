import React from "react";
import styles from "./Title.module.css";
import useNoteContext from "../context/NoteContext";

function Title() {
  // Global State
  const { isEditting, setIsEditting } = useNoteContext();
  // Local State
  const [title, setTitle] = React.useState("Click to change title");
  const [editTitle, setEditTitle] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  // Makes sure grids are not displaying input when global edit is off
  if (!isEditting) {
    if (editTitle) setEditTitle(false);
  }

  function handleKeys(key: string) {
    if (key === "Enter" || key === "Escape") {
      setEditTitle(false);
      setIsEditting(false);
    }
  }

  function handleEdit() {
    // If not editing, allow user to edit and lock other grid from editing
    if (!isEditting) {
      setEditTitle(true);
      setIsEditting(true);
    }

    // If editing, clicking will close current grid and unlock edit lock
    if (isEditting) {
      setEditTitle(false);
      setIsEditting(false);
    }
  }

  return (
    <header className={styles.header} ref={headerRef}>
      <h1 onClick={handleEdit}>
        {editTitle ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => handleKeys(e.key)}
            autoFocus
          />
        ) : (
          title
        )}
      </h1>
    </header>
  );
}

export default Title;
