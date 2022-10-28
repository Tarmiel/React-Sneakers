import DefaultButton from "../Default/DefaultButton";
import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ className, ...props }) => {
  return <DefaultButton className={`${styles.PrimaryButton} ${className}`} {...props} />;
};

export default PrimaryButton;
