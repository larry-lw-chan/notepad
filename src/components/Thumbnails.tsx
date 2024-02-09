import styles from "./Thumbnails.module.css";
import useGlobalContext from "../context/GlobalContext";

// interface ThumbnailsProp {
//   pages: IPage[];
//   setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
// }

function Thumbnails() {
  const { pages, setCurrentPage } = useGlobalContext();

  function handleClick(pageId: string) {
    setCurrentPage(pageId);
  }

  return (
    <nav className={styles.thumbnails}>
      {pages.allIds.map((pageId) => {
        return (
          <div
            className={styles.thumbnail}
            key={pageId}
            onClick={() => handleClick(pageId)}
          >
            {pages.byIds[pageId].title}
          </div>
        );
      })}
    </nav>
  );
}

export default Thumbnails;
