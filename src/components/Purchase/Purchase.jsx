import { useNavigate } from "react-router-dom";

import { useShop } from "../../hooks/Shop.hook";
import { BackButton } from "../../ui/Button";
import Sneakers from "../Sneakers/Sneakers";

import items from "../../DB/items.json";
import styles from "./Purchase.module.scss";

function Purchase() {
  const shop = useShop();
  const navigate = useNavigate();
  return (
    <div className={styles.Purchase}>
      <div className={styles.Header}>
        <BackButton onClick={() => navigate(-1)} />
        <h2 className={styles.Title}>Мої покупки</h2>
      </div>
      <div className={styles.Items}>
        <Sneakers items={items.filter((item) => shop.purchasedItems.includes(item.id))} />
      </div>
    </div>
  );
}

export default Purchase;
