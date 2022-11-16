import React, { useState, useEffect, ComponentClass } from "react";
import styles from "./SearchFrom.module.scss";

import { containsNumbers } from "../../helper/containsNumber";
import clsx from "clsx";
import { Link } from "react-router-dom";
const currentDate = new Date().toISOString().split("T")[0];

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
  const [data, setData] = useState<TravelData>(defaultTravelData);
  const [validation, setValidation] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    data.whereFrom !== "" && data.whereGoing !== "" && data.leaveDate !== ""
      ? setValidation(true)
      : setValidation(false);

    containsNumbers(data.whereFrom) || containsNumbers(data.whereGoing)
      ? setValidation(false)
      : setValidation(true);
  }, [data]);

  return (
    <section className={styles.page}>
      <form className={styles.search_form}>
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
      </form>
      <Link to="/avia/info">
        <button className={styles.button} disabled={!validation}>
          Найти билеты
        </button>
      </Link>
    </section>
  );
};
