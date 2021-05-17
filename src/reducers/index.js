import { combineReducers } from "redux";

import missionsReducer from "../Missions/missionsSlice";

const createRootReducer = (history) => {
  return combineReducers({
    missions: missionsReducer,
  });
};

export default createRootReducer;
