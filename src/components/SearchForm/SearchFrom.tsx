import React, { useState, useEffect } from "react";
import styles from "./SearchFrom.module.scss";

import { containsNumbers } from "../../helper/containsNumber";
import { useAppDispatch } from "../../helper/hook";
import { useNavigate } from "react-router-dom";

import clsx from "clsx";
import { addTicket } from "../../store/ticketSlice/ticketSlice";
const currentDate = new Date().toISOString().split("T")[0];

export const travelTime = [
  {
    id: 1,
    leaveTime: "9:20",
    backTime: "11:05",
    isActive: true,
  },
  {
    id: 2,
    leaveTime: "10:20",
    backTime: "12:05",
    isActive: false,
  },
  {
    id: 3,
    leaveTime: "11:20",
    backTime: "13:05",
    isActive: false,
  },
];

type TravelData = {
  whereFrom: string;
  whereGoing: string;
  leaveDate: string;
  backDate: string | null;
};

const defaultTravelData: TravelData = {
  whereFrom: "",
  whereGoing: "",
  leaveDate: currentDate,
  backDate: "",
};
export const SearchFrom = () => {
  const dispatch = useAppDispatch();

  const navigator = useNavigate();
  const [data, setData] = useState<TravelData>(defaultTravelData);
  const [validation, setValidation] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigator("/avia/info");
    dispatch(addTicket({ ...data, availableTime: travelTime }));
  };
  useEffect(() => {
    data.leaveDate !== "" ? setValidation(true) : setValidation(false);

    containsNumbers(data.whereFrom) || containsNumbers(data.whereGoing)
      ? setValidation(false)
      : setValidation(true);
  }, [data]);

  return (
    <section className={styles.page}>
      <form className={styles.search_form} onSubmit={submitHandler}>
        <div className={styles.inputs}>
          <label className={styles.input_label}>
            Откуда
            <input
              required
              name="whereFrom"
              onChange={handleInputChange}
              type="text"
              value={data.whereFrom || ""}
              className={styles.input}
              placeholder="Город вылета"
            />
          </label>
          <label className={styles.input_label}>
            Куда
            <input
              required
              name="whereGoing"
              onChange={handleInputChange}
              value={data.whereGoing || ""}
              type="text"
              className={styles.input}
              placeholder="Город прилета"
            />
          </label>
          <label className={styles.input_label}>
            Туда
            <input
              required
              onChange={handleInputChange}
              name="leaveDate"
              value={data.leaveDate || currentDate}
              type="date"
              className={clsx(styles.input, styles.input_first)}
            />
          </label>
          <label className={styles.input_label}>
            Обратно
            <input
              onChange={handleInputChange}
              value={data.backDate || ""}
              name="backDate"
              type="date"
              className={clsx(styles.input, styles.input_second)}
            />
          </label>
        </div>
        <button
          type="submit"
          onClick={submitHandler}
          className={styles.button}
          disabled={!validation}
        >
          Найти билеты
        </button>
      </form>
    </section>
  );
};
