import styles from "./Thumbnails.module.css";
import useGlobalContext from "../context/GlobalContext";
import Thumbnail from "./Thumbnail";

function Thumbnails() {
  const { pages } = useGlobalContext();

  return (
    <nav className={styles.thumbnails}>
      {pages.allIds.map((pageId) => {
        return <Thumbnail key={pageId} page={pages.byIds[pageId]} />;
      })}
    </nav>
  );
}

export default Thumbnails;
