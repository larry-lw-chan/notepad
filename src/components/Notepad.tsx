import React from "react";

import styles from "./Notepad.module.css";
import Page from "./Page";
import Thumbnails from "./Thumbnails";
import { IPage } from "../Interface";

const initial: IPage[] = [
  {
    title: "Click to Change Title",
    content: ["click to edit", "Arrow keys all work"],
  },
  {
    title: "Click to Change Title 2",
    content: [],
  },
];

function Notepad() {
  // Future function - Notepad can contain many pages, each with it's own state data
  const [pages, setPages] = React.useState(initial);
  const [currentPage, setCurrentPage] = React.useState(0);

  // Derived State
  // const page = pages.filter((page, index) => {
  //   if (index === currentPage) return page;
  // })[0];

  return (
    <div className={styles.notepad}>
      {pages.map((page, index) => {
        if (currentPage === index) {
          return <Page page={page} key={index} isHidden={false} />;
        } else {
          return <Page page={page} key={index} isHidden={true} />;
        }
      })}

      <Thumbnails pages={pages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Notepad;
