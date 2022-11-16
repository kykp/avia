import React from "react";
import styles from "../FlightCard.module.scss";
export const FlightTimeTop = () => {
  return (
    <div className={styles.flightTime_top}>
      <div className={styles.home_date}>
        <span className={styles.home_date_time}>09:20</span>
        <span className={styles.home_date_date}>Москва</span>
        <span className={styles.home_date_date}>19.05.2022</span>
      </div>
      <div className={styles.flight_time}>
        <div className={styles.flight_time_block}>
          <div className={styles.point}>
            <span className={styles.point_title}>SVO</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.point}>
            <span className={styles.point_title}>ROV</span>
          </div>
        </div>
        <span className={styles.flight_time_title}>В пути 1 ч 55 мин</span>
      </div>
      <div className={styles.home_date}>
        <span className={styles.home_date_time}>11:05</span>
        <span className={styles.home_date_date}>Ростов</span>
        <span className={styles.home_date_date}>19.05.2022</span>
      </div>
    </div>
  );
};
