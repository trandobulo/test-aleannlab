import React, { useEffect } from "react";
import styles from "./styles";
import loader from "../../svg/loader.svg";

const Loader = (): JSX.Element => {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src={loader} />
      <div>Loading ...</div>
    </div>
  );
};

export default Loader;
