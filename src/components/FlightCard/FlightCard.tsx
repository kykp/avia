import React, { useState } from "react";
import styles from "./FlightCard.module.scss";
import LogoImg from "../../assets/img/s7logo.svg";
import Luggage from "../../assets/img/Luggage.svg";
export const FlightCard = () => {
  const [activeButton, setActiveButton] = useState(false);
  return (
    <section className={styles.page}>
      <div className={styles.flightCard}>
        <div className={styles.about_company}>
          <div className={styles.ticket_status}>
            <span className={styles.ticket_status_title}>Невозвратный</span>
          </div>
          <div>
            <div className={styles.logo}>
              <img src={LogoImg} alt="logo" className={styles.logo_icon} />
            </div>
            <p className={styles.logo_title}>S7 Airlines</p>
          </div>
        </div>
        <div className={styles.flightTime}>
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
              <span className={styles.flight_time_title}>
                В пути 1 ч 55 мин
              </span>
            </div>
            <div className={styles.home_date}>
              <span className={styles.home_date_time}>11:05</span>
              <span className={styles.home_date_date}>Ростов</span>
              <span className={styles.home_date_date}>19.05.2022</span>
            </div>
          </div>
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
        </div>
        <div className={styles.luggage}>
          <img src={Luggage} alt="Luggage" />
        </div>
        <div className={styles.price}>
          <span className={styles.price_item}>4500 &#8381;</span>
        </div>
      </div>
    </section>
  );
};
