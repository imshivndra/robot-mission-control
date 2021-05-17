import { all } from "redux-saga/effects";

import { missionsSagas } from "../Missions/sagas/index";

export default function* rootSaga() {
  yield all([...missionsSagas]);
}
