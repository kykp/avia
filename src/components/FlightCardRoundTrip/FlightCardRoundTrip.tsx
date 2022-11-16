import React from "react";
import flightCardStyles from "../FlightCard/FlightCard.module.scss";
import styles from "./FlightCardRoundTrip.module.scss";
import { AboutCompany } from "../FlightCard/components/AboutCompany";
import { FlightTimeTop } from "../FlightCard/components/FlightTimeTop";
import { FlightTimeBottom } from "../FlightCard/components/FlightTimeBottom";
import { Luagage } from "../FlightCard/components/Luagage";
export const FlightCardRoundTrip = () => {
  return (
    <div className={styles.double_tikets}>
      <div className={styles.left_wrapper}>
        <div className={styles.flightCard}>
          <AboutCompany />
          <div className={styles.flightTime}>
            <FlightTimeTop />
          </div>
          <Luagage />
        </div>
        <div className={styles.flightCard}>
          <AboutCompany />
          <div className={styles.flightTime}>
            <FlightTimeTop />
          </div>
          <Luagage />
        </div>
      </div>
      <div className={styles.right_wrapper}>
        <div className={styles.price}>
          <span className={styles.price_item}>9000 &#8381;</span>
        </div>
      </div>
    </div>
  );
};
