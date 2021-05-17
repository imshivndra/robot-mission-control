import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

export const missionsSlice = createSlice({
  name: "missions",
  initialState: {
    missions: [],
    mission: {},
    openForm: false,
    missionMetaData: {},
    missionMetaDataLoading: true,
    editMission: false,
  },
  reducers: {
    setMissions: (state, action) => {
      state.missions = action.payload;
    },
    setOpenForm: (state, action) => {
      state.openForm = action.payload;
    },
    setMissionMetaData: (state, action) => {
      state.missionMetaData = action.payload;
    },
    setMissionMetaDataLoading: (state, action) => {
      state.missionMetaDataLoading = action.payload;
    },
    setEditMission: (state, action) => {
      state.editMission = action.payload;
    },
  },
});

export const {
  setMission,
  setMissionMetaData,
  setMissionMetaDataLoading,
  setOpenForm,
  setMissions,
  setEditMission,
} = missionsSlice.actions;

export const selectMissions = (state) => get(state, "missions.missions");
export const selectOpenForm = (state) => get(state, "missions.openForm");
export const selectEditMission = (state) => get(state, "missions.editMission");
export const selectMissionMetaData = (state) =>
  get(state, "missions.missionMetaData");
export const selectMissionMetaDataLoading = (state) =>
  get(state, "missions.missionMetaDataLoading");

export default missionsSlice.reducer;
