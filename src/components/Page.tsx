import React from "react";
import styles from "./Page.module.css";
import Title from "./Title";
import GridList from "./GridList";

function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.sidebar}></div>
      <main>
        <Title />
        <GridList />
      </main>
      <div className={styles.bottom}></div>
    </div>
  );
}

export default Page;
