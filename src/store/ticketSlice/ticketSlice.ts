import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TravelData {
  whereFrom: string;
  whereGoing: string;
  leaveDate: string;
  backDate: string | null;
}
const currentDate = new Date().toISOString().split("T")[0];
const defaultTravelData: TravelData = {
  whereFrom: "",
  whereGoing: "",
  leaveDate: currentDate,
  backDate: "",
};

interface ticketState {
  ticket: TravelData;
}

const initialState: ticketState = {
  ticket: defaultTravelData,
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<TravelData>) => {
      state.ticket = action.payload;
    },
  },
});

export const { addTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
