import { combineReducers } from "redux";

import missionsReducer from "../Missions/missionsSlice";

const createRootReducer = (history) =>
  combineReducers({
    missions: missionsReducer,
  });

export default createRootReducer;
