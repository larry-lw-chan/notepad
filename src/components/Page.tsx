import React from "react";
import styles from "./Page.module.css";
import Header from "./Header";
import GridList from "./GridList";

function Page() {
  const [title, setTitle] = React.useState("Notepad Add");

  //   function handleSetTitle(e: Event) {
  //     setTitle(e.target.value);
  //   }

  return (
    <div className={styles.page}>
      <div className={styles.sidebar}></div>
      <main>
        <Header title={title} setTitle={setTitle} />
        <GridList />
      </main>
    </div>
  );
}

export default Page;
