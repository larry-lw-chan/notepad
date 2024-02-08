import React from "react";

import styles from "./Notepad.module.css";
import Page from "./Page";
import Thumbnails from "./Thumbnails";
import useGlobalContext from "../context/GlobalContext";

function Notepad() {
  // Future function - Notepad can contain many pages, each with it's own state data
  const { pages, currentPage } = useGlobalContext();

  return (
    <div className={styles.notepad}>
      {pages.map((page, index) => {
        if (currentPage === index) {
          return <Page page={page} key={index} isHidden={false} />;
        } else {
          return <Page page={page} key={index} isHidden={true} />;
        }
      })}

      <Thumbnails />
    </div>
  );
}

export default Notepad;
