import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../helper/hook";
import { getAllTickets } from "../../../store/ticketSlice/selectors";
import styles from "../FlightCard.module.scss";
export const FlightTimeTop = () => {
  const ticketData = useAppSelector(getAllTickets);
  const [flighTime, setFlightTime] = useState({ leave: "", arrive: "" });

  const { whereFrom, whereGoing, availableTime, leaveDate } = ticketData.ticket;

  useEffect(() => {
    const currentTime = availableTime.find((el) => el.isActive);
    if (currentTime) {
      setFlightTime({
        leave: currentTime.leaveTime,
        arrive: currentTime.backTime,
      });
    }
  }, [availableTime]);

  return (
    <div className={styles.flightTime_top}>
      <div className={styles.home_date}>
        <span className={styles.home_date_time}>{flighTime.leave}</span>
        <span className={styles.home_date_date}></span>
        <span className={styles.home_date_date}>
          {leaveDate.split("-").reverse().join("-")}
        </span>
      </div>
      <div className={styles.flight_time}>
        <div className={styles.flight_time_block}>
          <div className={styles.point}>
            <span className={styles.point_title}>
              {whereFrom.slice(0, 3).toUpperCase()}
            </span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.point}>
            <span className={styles.point_title}>
              {whereGoing.slice(0, 3).toUpperCase()}
            </span>
          </div>
        </div>
        <span className={styles.flight_time_title}>В пути 1 ч 55 мин</span>
      </div>
      <div className={styles.home_date}>
        <span className={styles.home_date_time}>{flighTime.arrive}</span>
        <span className={styles.home_date_date}>{whereGoing}</span>
        <span className={styles.home_date_date}>
          {leaveDate.split("-").reverse().join("-")}
        </span>
      </div>
    </div>
  );
};
