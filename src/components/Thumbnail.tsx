import styles from "./Thumbnails.module.css";
import useGlobalContext from "../context/GlobalContext";
import { IPage } from "../Interface";

interface ThumbnailProp {
  page: IPage;
}

function Thumbnail({ page }: ThumbnailProp) {
  const { setCurrentPage } = useGlobalContext();

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    setCurrentPage(page.id);
  }

  return (
    <div className={styles.thumbnail} onClick={(e) => handleClick(e)}>
      {page.title}
    </div>
  );
}

export default Thumbnail;
