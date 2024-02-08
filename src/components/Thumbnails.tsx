import React from "react";
import styles from "./Thumbnails.module.css";
import { IPage } from "../Interface";

interface ThumbnailsProp {
  pages: IPage[];
  setCurrentPages: React.Dispatch<React.SetStateAction<number>>;
}

function Thumbnails({ pages, setCurrentPage }: ThumbnailsProp) {
  return (
    <nav className={styles.thumbnails}>
      <h2>Here's the thumbnails</h2>
    </nav>
  );
}

export default Thumbnails;
