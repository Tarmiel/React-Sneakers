import { useShop } from "../../../hooks/Shop.hook";
import { DirectedButton } from "../../../ui/Button";
import styles from "./EmptyCart.module.scss";

function EmptyCart() {
  const shop = useShop();

  return (
    <div className={styles.EmptyCart}>
      <img width={120} height={120} src="/img/box.png" alt="Empty Box" />
      <div className={styles.Title}>Кошик порожній</div>
      <div className={styles.SubTitle}>Додайте хоча б одну пару кросівок, щоб зробити замовлення.</div>
      <DirectedButton back onClick={() => shop.setIsCartOpen(false)}>
        Повернутися назад
      </DirectedButton>
    </div>
  );
}

export default EmptyCart;
