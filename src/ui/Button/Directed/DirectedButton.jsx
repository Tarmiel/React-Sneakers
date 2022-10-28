import styles from "./DirectedButton.module.scss";
import { ArrowIcon } from "../../Icons";
import DefaultButton from "../Default/DefaultButton";

const DirectedButton = ({ children, className, back, ...props }) => {
  return (
    <DefaultButton className={`${styles.DirectedButton} ${back && styles.Back} ${className}`} {...props}>
      <div className={styles.Container}>
        <div className={styles.Edge}></div>
        <div className={styles.Text}>{children}</div>
        <div className={styles.Edge}>
          <ArrowIcon color={"white"} size={20} />
        </div>
      </div>
    </DefaultButton>
  );
};

export default DirectedButton;
