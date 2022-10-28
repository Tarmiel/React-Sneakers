import { useNavigate } from "react-router-dom";

import { CartIcon, HeartIcon, ProfileIcon } from "../../ui/Icons";

import { useShop } from "../../hooks/Shop.hook";

import styles from "./Header.module.scss";

function Header() {
  const shop = useShop();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const goToFavorite = () => {
    navigate("/favorite");
  };
  const goToPurchase = () => {
    navigate("/purchase");
  };

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderLeft} onClick={() => goToHome()}>
        <img src="/img/logo.png" alt="Logo" />
        <div>
          <h1>REACT SNEAKERS</h1>
          <div>Магазин найкращих кросівок</div>
        </div>
      </div>
      <div className={styles.HeaderRight}>
        <div className={styles.Cart} onClick={() => shop.setIsCartOpen(true)}>
          <CartIcon size={"22"} color={"#5C5C5C"} />
          <div className={styles.TotalPrice}>{shop.totalPrice} грн.</div>
        </div>
        <div className={styles.Favorite} onClick={() => goToFavorite()}>
          <HeartIcon size={"20"} color={"#5C5C5C"} />
        </div>
        <div className={styles.Profile} onClick={() => goToPurchase()}>
          <ProfileIcon size={"20"} color={"#5C5C5C"} />
        </div>
      </div>
    </header>
  );
}

export default Header;
