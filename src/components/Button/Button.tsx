import React from "react";
import styles from "./styles";
import arrow from "../../svg/arrow.svg";
import { ButtonProps } from "./types";

function Button({ type, value }: ButtonProps): JSX.Element {
  return (
    <div className={styles.button(type)}>
      {type === "buttonArrow" && (
        <img className={styles.buttonIcon} src={arrow}></img>
      )}
      <p>{value}</p>
    </div>
  );
}

export default Button;
