import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

export const missionsSlice = createSlice({
  name: "missions",
  initialState: {
    missions: [],
    mission: {},
    openForm: false,
    robots:[],
    robotOptionsLoading:true
  },
  reducers: {
    setMission: (state, action) => {
      state.mission = action.payload;
    },
    setOpenForm: (state, action) => {
      state.openForm = action.payload;
    },
    setRobots:(state,action)=>{
      state.robots=action.payload
    },
    setRobotsLoading: (state, action) => {
      state.robotsLoading = !!action.payload;
    }
  },
});

export const { setMission, setRobots, setRobotsLoading } = missionsSlice.actions;
export const { setOpenForm } = missionsSlice.actions;

export const selectMissions = (state) => get(state, "missions");
export const selectOpenForm = (state) => get(state, "missions.openForm");
export const selectRobots = (state) => get(state, "missions.robots");
export const selectRobotsLoading = (state) =>
  get(state, "missions.robotsLoading");


export default missionsSlice.reducer;
