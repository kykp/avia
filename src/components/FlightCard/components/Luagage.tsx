import React from "react";
import styles from "../FlightCard.module.scss";
import Luggage from "../../../assets/img/Luggage.svg";

export const Luagage = () => {
  return (
    <div className={styles.luggage}>
      <img src={Luggage} alt="Luggage" />
    </div>
  );
};
