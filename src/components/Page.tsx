import React from "react";
import styles from "./Page.module.css";
import Title from "./Title";
import ContentList from "./ContentList";
import { IPage } from "../Interface";

interface PageProp {
  page: IPage;
  isHidden: boolean;
}

function Page({ page, isHidden }: PageProp) {
  return (
    <main className={`${styles.page} ${isHidden && styles.hide}`}>
      <div className={styles.sidebar}></div>
      <div>
        <Title page={page} />
        <ContentList page={page} />
      </div>
      <div className={styles.bottom}></div>
    </main>
  );
}

export default Page;
