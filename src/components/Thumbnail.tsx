import styles from "./Thumbnails.module.css";
import useGlobalContext from "../context/GlobalContext";
import { IPage } from "../Interface";

interface ThumbnailProp {
  page: IPage;
}

function Thumbnail({ page }: ThumbnailProp) {
  const { setCurrentPage } = useGlobalContext();

  function handleClick(pageId: string) {
    setCurrentPage(pageId);
  }

  return (
    <div className={styles.thumbnail} onClick={() => handleClick(page.id)}>
      {page.title}
    </div>
  );
}

export default Thumbnail;
