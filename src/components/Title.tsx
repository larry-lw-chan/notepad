import React from "react";
import styles from "./Title.module.css";
import useGlobalContext from "../context/GlobalContext";
import { IPage } from "../Interface";

interface TitleProp {
  page: IPage;
}

function Title({ page }: TitleProp) {
  // Global State
  const { pages, setPages, isEditting, setIsEditting } = useGlobalContext();

  // Local State
  const [editTitle, setEditTitle] = React.useState(false);

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

  function handleChange(title: string) {
    // Update entire content state now
    const newPages = { ...pages };
    newPages.byIds[page.id].title = title;
    setPages(newPages);
  }

  return (
    <header className={styles.header}>
      <h1 onClick={handleEdit}>
        {editTitle ? (
          <input
            type="text"
            value={page.title}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => handleKeys(e.key)}
            autoFocus
          />
        ) : (
          page.title
        )}
      </h1>
    </header>
  );
}

export default Title;
