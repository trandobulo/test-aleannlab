import React from "react";
import styles from "./styles";
import arrow from "../../svg/arrow.svg";
import { OptionProps } from "./types";

function Option({ type, value }: OptionProps): JSX.Element {
  return (
    <div className={styles.option(type)}>
      <p>{value}</p>
    </div>
  );
}

export default Option;
