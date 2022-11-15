import React from "react";
import styles from "./styles";

import { ButtonProps } from "./types";

function Button({ type, value }: ButtonProps) {
  return (
    <div className={styles.button(type)}>
      <p>{value}</p>
    </div>
  );
}

export default Button;
