import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

export const missionsSlice = createSlice({
  name: "missions",
  initialState: {
    missions: [],
    mission: {},
  },
  reducers: {
    setMission: (state, action) => {
      state.mission = action.payload;
    },
  },
});

export const { setMission } = missionsSlice.actions;

export const selectUser = (state) => get(state, "home");

export default missionsSlice.reducer;
