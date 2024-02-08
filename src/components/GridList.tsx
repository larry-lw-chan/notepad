import React from "react";
import styles from "./GridList.module.css";
import Grid from "./Grid";

const NUM_OF_GRID = 30;

function GridList() {
  const grids = Array.from({ length: NUM_OF_GRID }, () => "");
  const [isEditting, setIsEditting] = React.useState(false);

  return (
    <ul className={styles.gridlist}>
      {grids.map((_, i) => (
        <Grid key={i} isEditting={isEditting} setIsEditting={setIsEditting} />
      ))}
    </ul>
  );
}

export default GridList;
