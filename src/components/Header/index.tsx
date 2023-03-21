import styles from "./Header.module.scss";
import logo from "../../assets/image/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" />
    </header>
  );
};
