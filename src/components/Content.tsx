import React from "react";
import useGlobalContext from "../context/GlobalContext";
import { IContent } from "../Interface";
import { NUM_OF_GRID } from "../context/GlobalProvider";

interface ContentProp {
  content: IContent;
  currentGrid: string | null;
  setCurrentGrid: React.Dispatch<React.SetStateAction<string | null>>;
  id: string;
}

function Content({ content, currentGrid, setCurrentGrid, id }: ContentProp) {
  // Global State
  const { contents, setContents } = useGlobalContext();
  const { isEditting, setIsEditting } = useGlobalContext();

  // Local State
  const [note, setNote] = React.useState(content.content);

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

  // Handles updating state based on note changes
  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    e.stopPropagation();
    const id = Number(content.id.match(/\d+/)![0]);
    switch (e.key) {
      case "Enter":
      case "ArrowDown": {
        if (id < NUM_OF_GRID - 1) setCurrentGrid(`content${id + 1}`);
        break;
      }
      case "ArrowUp": {
        if (id > 0) setCurrentGrid(`content${id - 1}`);
        break;
      }
      case "Escape":
        setCurrentGrid(null);
        break;
    }
  }

  // Handles updating state based on note changes
  React.useEffect(() => {
    function handleChange(newContent: string) {
      const newContents = Object.assign(contents);
      contents.allIds.forEach((id) => {
        if (content.id === id) {
          newContents.byIds[id].content = newContent;
        }
      });
      setContents(newContents);
    }
    handleChange(note);
  }, [note, content.id, contents, setContents]);

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
