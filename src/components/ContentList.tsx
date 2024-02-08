import React from "react";
import styles from "./GridList.module.css";
import Content from "./Content";
import { IPage } from "../Interface";

interface ContentListProps {
  page: IPage;
}

export const NUM_OF_GRID = 32;

function generateContent(content: string[]) {
  const padding = Array.from(
    { length: NUM_OF_GRID - content.length },
    () => ""
  );
  return [...content, ...padding];
}

function ContentList({ page }: ContentListProps) {
  const contentList = generateContent(page.content);
  const [currentGrid, setCurrentGrid] = React.useState<number | null>(null);

  return (
    <ul className={styles.gridlist}>
      {contentList.map((content, i) => {
        return (
          <Content
            content={content}
            currentGrid={currentGrid}
            setCurrentGrid={setCurrentGrid}
            id={i}
            key={i}
          />
        );
      })}
    </ul>
  );
}

export default ContentList;
