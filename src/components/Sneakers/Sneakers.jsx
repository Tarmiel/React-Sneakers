import Card from "../Card";
import styles from "./Sneakers.module.scss";

function Sneakers({ items, ...props }) {
  return (
    <div className={styles.Container}>
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Sneakers;
