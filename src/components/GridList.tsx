import React from "react";
import styles from "./GridList.module.css";
import Grid from "./Grid";

export const NUM_OF_GRID = 32;

function GridList() {
  const grids = Array.from({ length: NUM_OF_GRID }, () => "");
  const [currentGrid, setCurrentGrid] = React.useState<number | null>(null);

  return (
    <ul className={styles.gridlist}>
      {grids.map((_, i) => {
        return (
          <Grid
            currentGrid={currentGrid}
            setCurrentGrid={setCurrentGrid}
            id={i}
            key={i}
          />
        );
      })}
    </ul>
  );
}

export default GridList;
