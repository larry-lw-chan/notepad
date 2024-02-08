import React from "react";

// interface GridProps {
//   edit: boolean;
//   setEdit: React.Dispatch<React.SetStateAction<boolean>>;
// }

interface GridProp {
  isEditting: boolean;
  setIsEditting: React.Dispatch<React.SetStateAction<boolean>>;
}

function Grid({ isEditting, setIsEditting }: GridProp) {
  const [note, setNote] = React.useState("");
  const [edit, setEdit] = React.useState<boolean>(false);

  function handleKeys(key: string) {
    if (key === "Enter" || key === "Escape") {
      setEdit(false);
      setIsEditting(false);
    }
  }

  function handleEdit() {
    // If not editing, allow user to edit and lock other grid from editing
    if (!isEditting) {
      setEdit(true);
      setIsEditting(true);
    }

    // If editing, clicking will close current grid and unlock edit lock
    if (isEditting) {
      setEdit(false);
      setIsEditting(false);
    }
  }

  return (
    <li onClick={handleEdit}>
      {edit ? (
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
