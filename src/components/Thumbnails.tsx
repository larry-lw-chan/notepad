import styles from "./Thumbnails.module.css";
import useGlobalContext from "../context/GlobalContext";

// interface ThumbnailsProp {
//   pages: IPage[];
//   setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
// }

function Thumbnails() {
  const { pages, setCurrentPage } = useGlobalContext();

  function handleClick(i: number) {
    setCurrentPage(i);
  }

  return (
    <nav className={styles.thumbnails}>
      {pages.map((page, i) => {
        return (
          <div
            className={styles.thumbnail}
            key={i}
            onClick={() => handleClick(i)}
          >
            {page.title}
          </div>
        );
      })}
    </nav>
  );
}

export default Thumbnails;
