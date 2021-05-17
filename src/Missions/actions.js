// ACTION TYPES
export const SAGA_GET_ROBOTS = "missions/SAGA_GET_ROBOTS";


// ACTION CREATORS
export const getRobots = (data) => ({
  type: SAGA_GET_ROBOTS,
  data,
});


