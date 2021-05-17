import { takeEvery } from "redux-saga/effects";

import { SAGA_GET_ROBOTS } from "../actions";
import { getRobotsSaga } from "./sagas";

export const missionsSagas = [takeEvery(SAGA_GET_ROBOTS, getRobotsSaga)];
