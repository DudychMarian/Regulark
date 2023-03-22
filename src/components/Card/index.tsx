import { useState } from "react";

// @ts-ignore
import { Tooltip } from "./parts/Tooltip";
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

  const matches = checkRegExp(value, props.pattern);
  const isCorret = matches?.length > 0;

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <b>{props.title.length > 25 ? props.title.substring(0, 25) + "..." : props.title}</b>
        <Tooltip description={props.description} />
      </div>
      <div className={styles.content}>
        <label>
          <input className={styles.placeholder} type="text" value={props.pattern} readOnly />
        </label>
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
        {value && matches && (
          <ul className={styles.matches}>
            {matches
              .sort((a, b) => a.length - b.length)
              .map((match, index) => {
                return <li key={match + "-" + index}>{match}</li>;
              })}
          </ul>
        )}
      </div>
    </div>
  );
};
