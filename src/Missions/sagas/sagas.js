import { put, call, select } from "redux-saga/effects";
import { get } from "lodash";
import { v4 as uuid } from "uuid";

import {
  setMissionMetaData,
  setMissionMetaDataLoading,
  setOpenForm,
  setMissions,
} from "../missionsSlice";
import { getMissionMetaData, postMission, getMissions, patchMission } from "../api";

export function* getMissionMetaDataSaga(params) {
  try {
    console.log("get robot saga");
    const { data } = params;
    yield put(setMissionMetaDataLoading(true));
    const { data: result } = yield call(getMissionMetaData, data);
    yield put(setMissionMetaData(result));
    yield put(setMissionMetaDataLoading(false));
  } catch (e) {
    console.log("An error occured in mission Meta Data saga");
  }
}

export function* postMissionSaga(params) {
  const {
    data: { values, setSubmitting },
  } = params;

  try {
    console.log("Post mission saga", params);
    setSubmitting(true);
    yield call(postMission, values);
    yield put(setOpenForm(false));
  } catch (e) {
    console.log("An error occured in Post Mission saga");
  }
}
export function* patchMissionSaga(params) {
  const {
    data: { values, setSubmitting,id },
  } = params;

  try {
    console.log("Patch mission saga", params);
    setSubmitting(true);
    yield call(patchMission, values,id);
    yield put(setOpenForm(false));
  } catch (e) {
    console.log("An error occured in Patch Mission saga");
  }
}

export function* getMissionsSaga(params) {
  try {
    console.log("GET missions saga", params);
    const { data: result } = yield call(getMissions, params);
    yield put(setMissions(result));
  } catch (e) {
    console.log("An error occured in Post Mission saga");
  }
}
