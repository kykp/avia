import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./layout.module.scss";

import clsx from "clsx";

export const Layout = () => {
  return (
    <>
      <main className={clsx(styles.main, styles.page)}>
        <Outlet />
      </main>
    </>
  );
};
