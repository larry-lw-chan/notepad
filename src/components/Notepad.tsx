import styles from "./Notepad.module.css";

import Page from "./Page";
import Thumbnails from "./Thumbnails";

function Notepad() {
  // Future function - Notepad can contain many pages, each with it's own state data
  // Add Navigation Bar Above Page
  return (
    <div className={styles.notepad}>
      <Page />
      <Thumbnails />
    </div>
  );
}

export default Notepad;
