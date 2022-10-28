import { useMemo, useState } from "react";

import CartItem from "../CartItem";
import EmptyCart from "../EmptyCart";
import OrderInfo from "../OrderInfo";
import { DirectedButton } from "../../../ui/Button";

import DB from "../../../DB/items.json";
import { useShop } from "../../../hooks/Shop.hook";
import styles from "./CartContent.module.scss";

function CartContent({ ...props }) {
  const [order, setOrder] = useState(false);

  const shop = useShop();

  const items = useMemo(() => {
    return DB.filter((item) => shop.cartItems.includes(item.id));
  }, [shop.cartItems]);

  if (order) {
    return <OrderInfo />;
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }

  const createOrder = (goods) => {
    shop.createOrder(goods.map((good) => good.id));
    setOrder(true);
  };

  return (
    <>
      <div className={styles.Items}>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className={styles.Total}>
        <ul>
          <li>
            <span>Усього:</span>
            <div></div>
            <b>{shop.totalPrice} грн. </b>
          </li>
          <li>
            <span>Податок 5%:</span>
            <div></div>
            <b>{(shop.totalPrice * 0.05).toFixed(3)} грн. </b>
          </li>
        </ul>
        <DirectedButton onClick={() => createOrder(items)}>ОФОРМИТИ ЗАМОВЛЕННЯ</DirectedButton>
      </div>
    </>
  );
}

export default CartContent;
