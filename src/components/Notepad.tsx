import styles from "./Notepad.module.css";
import Header from "./Header";
import GridList from "./GridList";

function Notepad() {
  return (
    <div className={styles.paper}>
      <div className={styles.sidebar}></div>
      <Header />
      <GridList />
    </div>
  );
}

export default Notepad;
