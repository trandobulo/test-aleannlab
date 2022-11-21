import React, { useEffect } from "react";
import styles from "./styles";
import loader from "../../svg/loader.svg";

const Loader = (): JSX.Element => {
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      alert(
        "Ups, there is a problem while loading data from server. Try to reload page or repeat your request later "
      );
    }, 5000);
    return () => {
      clearTimeout(loadTimer);
    };
  });

  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src={loader} />
      <div>Loading ...</div>
    </div>
  );
};

export default Loader;
