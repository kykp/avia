import React, { useState } from "react";
import styles from "../FlightCard.module.scss";

export const FlightTimeBottom = () => {
  const [activeButton, setActiveButton] = useState(false);
  return (
    <div className={styles.flightTime_bottom}>
      <button
        className={`${
          activeButton ? styles.button_time : styles.button_time_active
        }`}
      >
        9:20 - 11:05
      </button>
      <button
        className={`${
          activeButton ? styles.button_time_active : styles.button_time
        }`}
      >
        10:20 - 12:05
      </button>
      <button
        className={`${
          activeButton ? styles.button_time_active : styles.button_time
        }`}
      >
        11:20 - 13:05
      </button>
    </div>
  );
};
