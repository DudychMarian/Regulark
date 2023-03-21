import { useState } from "react";
import { checkRegExp } from "./logic/card-helper";

import success from "../../assets/image/success.svg";
import error from "../../assets/image/error.svg";
import styles from "./Card.module.scss";

export interface CardProps {
  title: string;
  description: string;
  placeholder: string;
  pattern: string;
}

export const Card = (props: CardProps) => {
  const [value, setValue] = useState("");

  const isCorret = checkRegExp(value, props.pattern)?.length > 0;

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.card}>
      <b className={styles.head}>{props.title.length > 25 ? props.title.substring(0, 25) + "..." : props.title}</b>
      <div className={styles.content}>
        <input className={styles.placeholder} type="text" value={props.pattern} readOnly />
        <div className={styles.wrapper}>
          {value.length !== 0 && (
            <>
              {isCorret ? (
                <img className={styles.image} src={success} alt="Success" height="39px" />
              ) : (
                <img className={styles.image} src={error} alt="Error" height="39px" />
              )}
            </>
          )}
          <input
            className={styles.input_test}
            type="text"
            placeholder={props.placeholder}
            value={value}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={styles.description}>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
