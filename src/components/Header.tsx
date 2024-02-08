import React from "react";
import { Dispatch, SetStateAction } from "react";
import styles from "./Header.module.css";

interface HeaderProp {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

function Header({ title, setTitle }: HeaderProp) {
  const [editing, setEditing] = React.useState(false);

  return (
    <header className={styles.header}>
      <h1 onDoubleClick={() => setEditing(!editing)}>
        {editing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          title
        )}
      </h1>
    </header>
  );
}

export default Header;
