import React from "react";
import styles from "./Page.module.css";
import Title from "./Title";
import GridList from "./GridList";

function Page() {
  return (
    <main className={styles.page}>
      <div className={styles.sidebar}></div>
      <div>
        <Title />
        <GridList />
      </div>
      <div className={styles.bottom}></div>
    </main>
  );
}

export default Page;
