import DefaultButton from "../Default/DefaultButton";
import { IoIosArrowBack as ArrowBack } from "react-icons/io";
import styles from "./BackButton.module.scss";

function BackButton({ className, ...props }) {
  return (
    <DefaultButton className={`${styles.BackButton} ${className}`} {...props}>
      <ArrowBack color={"#e0e0e0"} size={18} />
    </DefaultButton>
  );
}

export default BackButton;
