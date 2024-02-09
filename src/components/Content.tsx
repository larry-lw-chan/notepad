import React from "react";
import useGlobalContext from "../context/GlobalContext";
import { IContent } from "../Interface";
import { NUM_OF_GRID } from "../utils/dataParsing";

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
  // const [note, setNote] = React.useState(content.content);

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
    const pageId = Number(content.pageId.match(/\d+/)![0]);
    const contentId = Number(content.id.match(/\d+/)![0]);
    const position = contentId - NUM_OF_GRID * pageId;
    switch (e.key) {
      case "Enter":
      case "ArrowDown": {
        if (position < NUM_OF_GRID - 1)
          setCurrentGrid(`content${contentId + 1}`);
        break;
      }
      case "ArrowUp": {
        if (position > 0) setCurrentGrid(`content${contentId - 1}`);
        break;
      }
      case "Escape":
        setIsEditting(false);
        setCurrentGrid(null);
        break;
    }
  }

  function handleChange(note: string) {
    const newContents = { ...contents };
    newContents.byIds[content.id].content = note;
    setContents(newContents);
  }

  return (
    <li onClick={handleEdit}>
      {editGrid ? (
        <input
          name="input"
          type="text"
          value={content.content}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => handleKey(e)}
          autoFocus
        />
      ) : (
        content.content
      )}
    </li>
  );
}

export default Content;
