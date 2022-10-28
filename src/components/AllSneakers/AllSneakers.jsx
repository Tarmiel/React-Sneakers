import React, { useState } from "react";

import Search from "../../ui/Search";
import Sneakers from "../Sneakers/Sneakers";

import items from "../../DB/items.json";

import styles from "./AllSneakers.module.scss";

function AllSneakers() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.AllSneakers}>
      <div className={styles.Header}>
        <h2>{searchValue ? `Пошук за запитом: ${searchValue}` : "All sneakers"}</h2>
        <Search onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <div className={styles.Items}>
        <Sneakers items={items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))} />
      </div>
    </div>
  );
}

export default AllSneakers;
