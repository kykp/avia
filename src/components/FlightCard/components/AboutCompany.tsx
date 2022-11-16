import React from "react";
import styles from "../FlightCard.module.scss";
import LogoImg from "../../../assets/img/s7logo.svg";

export const AboutCompany = () => {
  return (
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
  );
};
