import { PlusIcon } from "../../Icons";
import DefaultButton from "../Default/DefaultButton";
import styles from "./DeleteButton.module.scss";

const DeleteButton = ({ className, ...props }) => {
  return (
    <DefaultButton className={`${styles.DeleteButton} ${className}`} {...props}>
      {<PlusIcon fill={"#e0e0e0"} width={11} height={11} />}
    </DefaultButton>
  );
};

export default DeleteButton;
