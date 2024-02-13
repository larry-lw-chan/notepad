import React from "react";
import styles from "./Thumbnails.module.css";
import useGlobalContext from "../context/GlobalContext";
import Thumbnail from "./Thumbnail";

function Thumbnails() {
  const { pages } = useGlobalContext();

  // Local State
  const [hide, setHide] = React.useState(true);

  function handleMouse(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.stopPropagation();
    setHide(!hide);
  }

  return (
    <nav
      id="thumbnails"
      className={`${styles.thumbnails} ${hide && styles.hide}`}
      onClick={() => setHide(!hide)}
      onMouseEnter={(e) => handleMouse(e)}
      onMouseLeave={(e) => handleMouse(e)}
    >
      {pages.allIds.map((pageId) => {
        return <Thumbnail key={pageId} page={pages.byIds[pageId]} />;
      })}
    </nav>
  );
}

export default Thumbnails;
