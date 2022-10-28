import { DirectedButton } from "../../../ui/Button";

import { useShop } from "../../../hooks/Shop.hook";
import styles from "./OrderInfo.module.scss";

function OrderInfo() {
  const shop = useShop();

  return (
    <div className={styles.OrderInfo}>
      <img src="/img/order.png" alt="Order" />
      <div className={styles.Title}>Замовлення оформлено!</div>
      <div className={styles.SubTitle}>Ваше замовлення скоро буде передане кур'єрській службі</div>
      <DirectedButton back onClick={() => shop.setIsCartOpen(false)}>
        Повернутися назад
      </DirectedButton>
    </div>
  );
}

export default OrderInfo;
