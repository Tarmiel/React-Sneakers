import { SearchIcon } from "../Icons";
import styles from "./Search.module.scss";

function Search({ ...props }) {
  return (
    <div className={styles.Search} {...props}>
      <SearchIcon color={"#E4E4E4"} size={18} />
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default Search;
