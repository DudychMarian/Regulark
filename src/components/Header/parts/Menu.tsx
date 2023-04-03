import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Menu.module.scss";

export const Menu = (props: any) => {

  const handleChangeInput = (event: any) => {
    props.setSearchValue(event.target.value)
    window.history.replaceState(null, "event.target.value", `?search=${event.target.value}`)
  };

  return (
    <nav className={styles.menu}>
      <ul>
        <Link to="?search=email">
          <li>
            <span>E-Mail</span>
          </li>
        </Link>
        <Link to="?search=numbers">
          <li>
            <span>Numbers</span>
          </li>
        </Link>
        <Link to="?search=strings">
          <li>
            <span>Strings</span>
          </li>
        </Link>
        <Link to="?search=date-time">
          <li>
            <span>Date/Time</span>
          </li>
        </Link>
        <li className={styles.search}>
            <input
              onChange={handleChangeInput}
              id="search-input"
              type="text"
              placeholder="Search..."
              value={props.searchValue}
            />
          </li>
      </ul>
    </nav>
  );
};
