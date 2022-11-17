import React from "react";
import styles from "./AviaInfo.module.scss";
import { FlightCard } from "../../components/FlightCard/FlightCard";
import { FlightCardRoundTrip } from "../../components/FlightCardRoundTrip/FlightCardRoundTrip";

export const AviaInfo = () => {
  return (
    <div className={(styles.page, styles.aviaInfo_page)}>
      <FlightCard />
      <section className={styles.aviaInfo_roundTrip}>
        <FlightCardRoundTrip />
      </section>
    </div>
  );
};
