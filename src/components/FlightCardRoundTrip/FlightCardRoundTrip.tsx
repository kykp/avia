import React, { useEffect, useState } from "react";
import oneCardStyles from "../FlightCard/FlightCard.module.scss";
import styles from "./FlightCardRoundTrip.module.scss";
import { AboutCompany } from "../FlightCard/components/AboutCompany";
import { FlightTimeTop } from "../FlightCard/components/FlightTimeTop";
import { Luagage } from "../FlightCard/components/Luagage";
import { getAllTickets } from "../../store/ticketSlice/selectors";
import { useAppSelector } from "../../helper/hook";

export const FlightCardRoundTrip = () => {
  const ticketData = useAppSelector(getAllTickets);
  const [flighTime, setFlightTime] = useState({ leave: "", arrive: "" });

  const { whereFrom, whereGoing, availableTime, backDate } = ticketData.ticket;
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
            <div className={oneCardStyles.flightTime_top}>
              <div className={oneCardStyles.home_date}>
                <span className={oneCardStyles.home_date_time}>
                  {flighTime.leave}
                </span>
                <span className={oneCardStyles.home_date_date}>
                  {whereGoing}
                </span>
                <span className={oneCardStyles.home_date_date}>
                  {backDate?.split("-").reverse().join("-")}
                </span>
              </div>
              <div className={oneCardStyles.flight_time}>
                <div className={oneCardStyles.flight_time_block}>
                  <div className={oneCardStyles.point}>
                    <span className={oneCardStyles.point_title}>
                      {whereFrom.slice(0, 3).toUpperCase()}
                    </span>
                  </div>
                  <div className={oneCardStyles.line}></div>
                  <div className={oneCardStyles.point}>
                    <span className={oneCardStyles.point_title}>
                      {whereGoing.slice(0, 3).toUpperCase()}
                    </span>
                  </div>
                </div>
                <span className={oneCardStyles.flight_time_title}>
                  В пути 1 ч 55 мин
                </span>
              </div>
              <div className={oneCardStyles.home_date}>
                <span className={oneCardStyles.home_date_time}>
                  {flighTime.arrive}
                </span>
                <span className={oneCardStyles.home_date_date}>
                  {whereFrom}
                </span>
                <span className={oneCardStyles.home_date_date}>
                  {backDate?.split("-").reverse().join("-")}
                </span>
              </div>
            </div>
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
