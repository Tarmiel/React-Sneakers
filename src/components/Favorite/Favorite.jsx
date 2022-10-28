import { useNavigate } from "react-router-dom";

import { BackButton } from "../../ui/Button";
import Sneakers from "../Sneakers/Sneakers";

import items from "../../DB/items.json";
import { useShop } from "../../hooks/Shop.hook";

import styles from "./Favorite.module.scss";

function Favorite() {
  const shop = useShop();
  const navigate = useNavigate();

  return (
    <div className={styles.Favorite}>
      <div className={styles.Header}>
        <BackButton onClick={() => navigate(-1)} />
        <h2 className={styles.Title}>Мої закладки</h2>
      </div>
      <div className={styles.Items}>
        <Sneakers items={items.filter((item) => shop.favoriteItems.includes(item.id))} />
      </div>
    </div>
  );
}

export default Favorite;
