import React from "react";
import styles from "./Thumbnails.module.css";
import useGlobalContext from "../context/GlobalContext";
import Thumbnail from "./Thumbnail";

function Thumbnails() {
  const { pages } = useGlobalContext();

  // Local State
  const [hide, setHide] = React.useState(true);

  // Detect hover and show menu when mouse cursor over it
  React.useEffect(() => {
    const thumbNav = document.querySelector("#thumbnails")!;
    thumbNav.addEventListener("mouseenter", (e) => {
      e.stopPropagation();
      setHide(!hide);
    });

    thumbNav.addEventListener("mouseleave", (e) => {
      e.stopPropagation();
      setHide(!hide);
    });
  }, [hide, setHide]);

  return (
    <nav
      id="thumbnails"
      className={`${styles.thumbnails} ${hide && styles.hide}`}
      onClick={() => setHide(!hide)}
    >
      {pages.allIds.map((pageId) => {
        return <Thumbnail key={pageId} page={pages.byIds[pageId]} />;
      })}
    </nav>
  );
}

export default Thumbnails;
