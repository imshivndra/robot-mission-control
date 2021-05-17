import { put, call, select } from "redux-saga/effects";
import { get } from "lodash";
import { v4 as uuid } from "uuid";

import { selectRobotsLoading, setRobots,setRobotsLoading } from "../missionsSlice";
import { getRobots } from "../api";

export function* getRobotsSaga(params) {
  try {
    console.log("get robot saga")
    const { data } = params;
    yield put(setRobotsLoading(true))
    const { data: result } = yield call(getRobots, data);
    yield put(setRobots(result));
    yield put(setRobotsLoading(false))
  } catch (e) {
    console.log("An error occured in Robots saga");
  }
}
