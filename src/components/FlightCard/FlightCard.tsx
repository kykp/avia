import React from "react";
import styles from "./FlightCard.module.scss";

import { AboutCompany } from "./components/AboutCompany";
import { FlightTimeTop } from "./components/FlightTimeTop";
import { FlightTimeBottom } from "./components/FlightTimeBottom";
import { Luagage } from "./components/Luagage";
import { Price } from "./components/Price";

export const FlightCard = () => {
  return (
    <div className={styles.flightCard}>
      <AboutCompany />
      <div className={styles.flightTime}>
        <FlightTimeTop />
        <FlightTimeBottom />
      </div>
      <Luagage />
      <Price />
    </div>
  );
};
