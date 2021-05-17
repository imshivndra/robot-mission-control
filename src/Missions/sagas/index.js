import { takeEvery } from "redux-saga/effects";

import { SAGA_GET_MISSION_META_DATA, SAGA_POST_MISSION, SAGA_GET_MISSIONS } from "../actions";
import { getMissionMetaDataSaga, postMissionSaga, getMissionsSaga } from "./sagas";

export const missionsSagas = [
  takeEvery(SAGA_GET_MISSION_META_DATA, getMissionMetaDataSaga),
  takeEvery(SAGA_POST_MISSION, postMissionSaga),
  takeEvery(SAGA_GET_MISSIONS, getMissionsSaga),
];
