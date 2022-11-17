import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const travelTime = [
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
export type TAvailableTime = {
  id: number;
  leaveTime: string;
  backTime: string;
  isActive: boolean;
};
export interface TravelData {
  whereFrom: string;
  whereGoing: string;
  leaveDate: string;
  backDate: string | null;
  availableTime: TAvailableTime[];
}

const currentDate = new Date().toISOString().split("T")[0];

const defaultTravelData: TravelData = {
  whereFrom: "",
  whereGoing: "",
  leaveDate: currentDate,
  backDate: "",
  availableTime: travelTime,
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
    setActiveTime: (state, action: PayloadAction<{ id: number }>) => {
      const curretnTime = state.ticket.availableTime.find(
        (el) => el.id === action.payload.id
      );
      if (curretnTime) {
        curretnTime.isActive = !curretnTime.isActive;
      }
      state.ticket.availableTime.filter((el) =>
        el.id !== action.payload.id ? (el.isActive = false) : null
      );
    },
  },
});

export const { addTicket, setActiveTime } = ticketSlice.actions;

export default ticketSlice.reducer;
