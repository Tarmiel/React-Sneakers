import styles from "./DefaultButton.module.scss";

const DefaultButton = ({ children, className, ...props }) => {
  return (
    <button className={`${styles.DefaultButton} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default DefaultButton;
