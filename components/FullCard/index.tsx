"use client";

import { useState, ChangeEvent, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "react-tippy";

import { checkRegExp } from "../Card/logic/card-helper";
import { CardProps } from "../Card";

import styles from "./FullCard.module.scss";
import IframeResizer from "iframe-resizer-react";

export const FullCard = (props: CardProps) => {
  const [value, setValue] = useState("");

  const matches = checkRegExp(value, props.pattern);
  const isCorret = matches?.length > 0;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleInputClick = (e: ChangeEvent<HTMLInputElement>) => {
    navigator.clipboard.writeText(e.target.value);
    e.target.select();
  };

  const tagsArray = props.tags.split(",");

  const link = "https://jex.im/regulex/#!embed=true&flags=m&re=" + encodeURIComponent(props.pattern);

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <b>{props.title.length > 25 ? props.title.substring(0, 25) + "..." : props.title}</b>
        {/* @ts-ignore */}
        <Tooltip title={props.description} animation="shift" theme="light" arrow={true} followCursor={false}>
          <Image className={styles.info} src="/info.svg" alt="Info" width={19} height={19} />
        </Tooltip>
      </div>
      <div className={styles.content}>
        <label>
          {/* @ts-ignore */}
          <Tooltip title={"Copy to clipboard"} animation="shift" theme="light" arrow={true} followCursor={false}>
            <input
              className={styles.placeholder}
              type="text"
              value={props.pattern}
              readOnly
              onClick={(e: any) => handleInputClick(e)}
            />
          </Tooltip>
        </label>
        <div className={styles.wrapper}>
          {value.length !== 0 && (
            <>
              {isCorret ? (
                <Image className={styles.image} src="/success.svg" alt="Success" width={39} height={39} />
              ) : (
                <Image className={styles.image} src="/error.svg" alt="Error" width={39} height={39} />
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
        {props.tags && (
          <ul className={styles.tags}>
            {tagsArray.map((value: string, index: number) => (
              <Link href={"/tags/" + value.split(" ").join("-")} key={index}>
                <li>{value}</li>
              </Link>
            ))}
          </ul>
        )}
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
      {props.fullDescription && (
        <div className={styles.description}>
          <p>Description:</p>
          <p>{props.fullDescription}</p>
        </div>
      )}
      <div className={styles.iframe}>
        {link && (
          <IframeResizer heightCalculationMethod="max" log src={link} style={{ padding: "0 16px", minWidth: "100%", overflow: "auto", minHeight: "400px" }} />
        )}
        <Link href={"/"} className={styles.link}>
          Regulark
        </Link>
      </div>
    </div>
  );
};
