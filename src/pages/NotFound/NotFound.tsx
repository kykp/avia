import React from "react";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <div className={styles.noresults}>
      <h2 className={styles.noresults__title}>
        К сожалению по вашему запросу ничего не найдено.
      </h2>
    </div>
  );
};
