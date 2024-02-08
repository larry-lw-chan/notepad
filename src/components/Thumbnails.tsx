import React from "react";
import styles from "./Thumbnails.module.css";
import { IPage } from "../Interface";

interface ThumbnailsProp {
  pages: IPage[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Thumbnails({ pages, setCurrentPage }: ThumbnailsProp) {
  return (
    <nav className={styles.thumbnails}>
      {pages.map((page, i) => {
        return (
          <div
            className={styles.thumbnail}
            key={i}
            onClick={() => setCurrentPage(i)}
          >
            {page.title}
          </div>
        );
      })}
    </nav>
  );
}

export default Thumbnails;
