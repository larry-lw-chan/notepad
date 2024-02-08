import styles from "./GridList.module.css";
import Grid from "./Grid";

const NUM_OF_GRID = 30;

function GridList() {
  const grids = Array.from({ length: NUM_OF_GRID }, () => "");

  return (
    <ul className={styles.gridlist}>
      {grids.map((_, idx) => (
        <Grid key={idx} />
      ))}
    </ul>
  );
}

export default GridList;
