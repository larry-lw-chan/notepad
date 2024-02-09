import React from "react";
import styles from "./GridList.module.css";
import Content from "./Content";
import useGlobalContext from "../context/GlobalContext";
import { IPage } from "../Interface";

interface ContentListProps {
  page: IPage;
}

function ContentList({ page }: ContentListProps) {
  // Global State
  const { contents } = useGlobalContext();
  // Local State
  const [currentGrid, setCurrentGrid] = React.useState<string | null>(null);

  return (
    <ul className={styles.gridlist}>
      {page.content.map((id) => {
        return (
          <Content
            content={contents.byIds[id]}
            currentGrid={currentGrid}
            setCurrentGrid={setCurrentGrid}
            id={id}
            key={id}
          />
        );
      })}
    </ul>
  );
}

export default ContentList;
