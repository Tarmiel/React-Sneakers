import styles from "./Card.module.scss";
import { AddToFavoriteButton, AddToCartButton } from "../../ui/Button";
import { useShop } from "../../hooks/Shop.hook";

function Card({ id, title, price }) {
  const shop = useShop();

  return (
    <div className={styles.Card}>
      <div className={styles.CardFavorite}>
        <AddToFavoriteButton onClick={() => shop.toggleFavoriteItem(id)} checked={shop.isInFavorite(id)} />
      </div>
      <img width={133} height={112} src={`/img/snk-${id}.jpg`} alt={title} />
      <div className={styles.Title}>{title}</div>
      <div className={styles.CardPrice}>
        <div>
          <p>Ціна:</p>
          <b>{price} грн.</b>
        </div>
        <AddToCartButton onClick={() => shop.toggleCartItem(id)} checked={shop.isInCart(id)} />
      </div>
    </div>
  );
}

export default Card;
