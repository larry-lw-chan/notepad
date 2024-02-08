import React from "react";
import styles from "./GridList.module.css";
import Grid from "./Grid";

const NUM_OF_GRID = 32;

function GridList() {
  const grids = Array.from({ length: NUM_OF_GRID }, () => "");

  return (
    <ul className={styles.gridlist}>
      {grids.map((_, i) => {
        return <Grid key={i} />;
      })}
    </ul>
  );
}

export default GridList;
