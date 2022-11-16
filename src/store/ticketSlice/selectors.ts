import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";

export const getAllTickets = (store: RootState) => store.ticket;

export const selectAllTickets = createSelector(
  getAllTickets,
  (tickets) => tickets.ticket
);
