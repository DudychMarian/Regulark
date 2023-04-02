import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import logo from "../../assets/image/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </header>
  );
};
