import { HeartIcon } from "../../Icons";
import DefaultButton from "../../Button/Default/DefaultButton";
import styles from "./AddToFavoriteButton.module.scss";

function AddToFavoriteButton({ className, checked, ...props }) {
  const icon = checked ? <HeartIcon solid color={"#FF8585"} /> : <HeartIcon color={"#e0e0e0"} />;

  return (
    <DefaultButton className={`${styles.AddToFavoriteButton} ${checked && styles.Checked} ${className}`} {...props}>
      {icon}
    </DefaultButton>
  );
}

export default AddToFavoriteButton;
