import React from "react";
import styles from "./Header.module.css";

function Header() {
  const [title, setTitle] = React.useState("Click to change title");
  const [edit, setEdit] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  function handleKeys(key: string) {
    if (key === "Enter" || key === "Escape") {
      setEdit(false);
    }
  }

  return (
    <header className={styles.header} ref={headerRef}>
      <h1 onClick={() => setEdit(!edit)}>
        {edit ? (
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

export default Header;
