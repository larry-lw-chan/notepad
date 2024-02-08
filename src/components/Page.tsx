import React from "react";
import styles from "./Page.module.css";
import Header from "./Header";
import GridList from "./GridList";

function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.sidebar}></div>
      <main>
        <Header />
        <GridList />
      </main>
    </div>
  );
}

export default Page;
