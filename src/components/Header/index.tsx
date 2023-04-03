import { Link } from "react-router-dom";

import { Menu } from "./parts/Menu";

import styles from "./Header.module.scss";
import logo from "../../assets/image/logo.svg";

export const Header = (props: any) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Menu searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>
    </header>
  );
};
