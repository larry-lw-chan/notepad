import React from "react";

import styles from "./Notepad.module.css";
import Page from "./Page";
import Thumbnails from "./Thumbnails";
import { IPage } from "../Interface";

const initial: IPage = {
  title: "Click to Change Title",
  content: [],
};

function Notepad() {
  // Future function - Notepad can contain many pages, each with it's own state data
  const [pages, setPages] = React.useState([initial]);
  const [currentPage, setCurrentPage] = React.useState(0);

  return (
    <div className={styles.notepad}>
      <Page />
      <Thumbnails pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Notepad;
