import React from "react";
import { useAppDispatch, useAppSelector } from "../../../helper/hook";
import { getAllTickets } from "../../../store/ticketSlice/selectors";
import { setActiveTime } from "../../../store/ticketSlice/ticketSlice";
import styles from "../FlightCard.module.scss";

export const FlightTimeBottom = () => {
  const dispatch = useAppDispatch();
  const ticketData = useAppSelector(getAllTickets);
  const { availableTime } = ticketData.ticket;

  const onHandleClick = (event: React.MouseEvent<HTMLElement>): void => {
    const id = event.currentTarget.id;
    dispatch(setActiveTime({ id: +id }));
  };
  return (
    <div className={styles.flightTime_bottom}>
      <button
        onClick={onHandleClick}
        id="1"
        className={`${
          availableTime[0].isActive
            ? styles.button_time_active
            : styles.button_time
        }`}
      >{`${availableTime[0].leaveTime} - ${availableTime[0].backTime}`}</button>
      <button
        onClick={onHandleClick}
        id="2"
        className={`${
          availableTime[1].isActive
            ? styles.button_time_active
            : styles.button_time
        }`}
      >{`${availableTime[1].leaveTime} - ${availableTime[1].backTime}  `}</button>
      <button
        onClick={onHandleClick}
        id="3"
        className={`${
          availableTime[2].isActive
            ? styles.button_time_active
            : styles.button_time
        }`}
      >{`${availableTime[2].leaveTime} - ${availableTime[2].backTime}  `}</button>
    </div>
  );
};
