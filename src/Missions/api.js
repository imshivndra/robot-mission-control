import axios from "axios";

export const getMissionMetaData = () =>
  axios.get("http://localhost:3002/mission_meta_data");

export const postMission = (params) => {
  return axios.post("http://localhost:3002/missions", params);
};
export const patchMission = (params, id) => {
  return axios.patch(`http://localhost:3002/missions/${id}`, params);
};

export const getMissions = () => axios.get("http://localhost:3002/missions");
