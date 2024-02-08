import React from "react";
import styles from "./Page.module.css";
import Title from "./Title";
import GridList from "./GridList";
import { IPage } from "../Interface";

interface PageProp {
  page: IPage;
}

function Page({ page }: PageProp) {
  return (
    <main className={styles.page}>
      <div className={styles.sidebar}></div>
      <div>
        <Title text={page.title} />
        <GridList />
      </div>
      <div className={styles.bottom}></div>
    </main>
  );
}

export default Page;
