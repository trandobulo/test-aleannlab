import React from "react";
import styles from "./styles";
import arrow from "../../svg/arrow.svg";
import { Link } from "react-router-dom";
import { ButtonProps } from "./types";

function Button({ type, value }: ButtonProps) {
  if (type === "buttonReturn") {
    return (
      <Link to="/job-board/page/1">
        <div className={styles.button(type)}>
          <img className={styles.buttonIcon} src={arrow}></img>
          <p>{value}</p>
        </div>
      </Link>
    );
  }

  return (
    <div className={styles.button(type)}>
      <p>{value}</p>
    </div>
  );
}

export default Button;
