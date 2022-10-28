import { useShop } from "../../../hooks/Shop.hook";
import { DeleteButton } from "../../../ui/Button";
import styles from "./CartItem.module.scss";

function CartItem({ id, title, price }) {
  const shop = useShop();

  return (
    <div className={styles.Card}>
      <img width={70} height={70} src={`/img/snk-${id}.jpg`} alt={title} />
      <div className={styles.Info}>
        <div className={styles.Title}>{title}</div>
        <div className={styles.Price}>{price} грн.</div>
      </div>
      <div className={styles.Delete}>
        <DeleteButton onClick={() => shop.toggleCartItem(id)} />
      </div>
    </div>
  );
}

export default CartItem;
