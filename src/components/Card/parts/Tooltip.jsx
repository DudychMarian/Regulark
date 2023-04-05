import { Tooltip as Tippy } from "react-tippy";

import info from "../../../assets/image/info.svg";
import styles from "../Card.module.scss";

export const Tooltip = (props) => {
  return (
    <Tippy title={props.description} animation="shift" theme="light" arrow={true} followCursor={false}>
      <img className={styles.info} src={info} alt="Info" />
    </Tippy>
  );
};
