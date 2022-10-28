import CartContent from "./CartContent";

import styles from "./Cart.module.scss";
import { useShop } from "../../hooks/Shop.hook";

function Cart({ items, ...props }) {
  const shop = useShop();

  if (!shop.isCartOpen) return null;

  return (
    <div className={styles.Overlay} onClick={() => shop.setIsCartOpen(false)}>
      <div className={styles.Cart} onClick={(e) => e.stopPropagation()}>
        <div className={styles.Container}>
          <div className={styles.Header}>Кошик</div>
          <div className={styles.Body}>
            <CartContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
