import React from "react";
import styles from "./AviaInfo.module.scss";
import { FlightCard } from "../../components/FlightCard/FlightCard";
import { FlightCardRoundTrip } from "../../components/FlightCardRoundTrip/FlightCardRoundTrip";
import { selectAllTickets } from "../../store/ticketSlice/selectors";
import { useAppSelector } from "../../helper/hook";

export const AviaInfo = () => {
  const ticketData = useAppSelector(selectAllTickets);
  const { backDate } = ticketData;

  return (
    <div className={(styles.page, styles.aviaInfo_page)}>
      <FlightCard />
      {backDate && (
        <section className={styles.aviaInfo_roundTrip}>
          <FlightCardRoundTrip />
        </section>
      )}
    </div>
  );
};
