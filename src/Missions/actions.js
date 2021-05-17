// ACTION TYPES
export const SAGA_GET_MISSION_META_DATA = "missions/SAGA_GET_MISSION_META_DATA";
export const SAGA_POST_MISSION = "missions/SAGA_POST_MISSION";
export const SAGA_GET_MISSIONS = "missions/SAGA_GET_MISSIONS";

// ACTION CREATORS
export const getMissionMetaData = (data) => ({
  type: SAGA_GET_MISSION_META_DATA ,
  data,
});

export const postMission = (data) => ({
  type: SAGA_POST_MISSION ,
  data,
});

export const getMissions = (data) => ({
  type: SAGA_GET_MISSIONS ,
  data,
});


