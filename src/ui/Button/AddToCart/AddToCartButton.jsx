import { CheckIcon, PlusIcon } from "../../Icons";
import DefaultButton from "../Default/DefaultButton";
import styles from "./AddToCartButton.module.scss";

const AddToCartButton = ({ className, checked, ...props }) => {
  const icon = checked ? (
    <CheckIcon fill={"#fff"} width={11} height={11} />
  ) : (
    <PlusIcon fill={"#e0e0e0"} width={11} height={11} />
  );

  return (
    <DefaultButton className={`${styles.AddToCartButton} ${checked && styles.Checked} ${className}`} {...props}>
      {icon}
    </DefaultButton>
  );
};

export default AddToCartButton;
