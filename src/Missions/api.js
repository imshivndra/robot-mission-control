import axios from "axios";

export const getMissionMetaData = () => axios.get("http://localhost:3002/mission_meta_data");

export const postMission= (params) => {
    console.log("params post mission",params);
    return (axios.post("http://localhost:3002/missions",params))};

export const getMissions = () => axios.get("http://localhost:3002/missions");

export const getMission = (id) => axios.get(`http://localhost:3002/robots/${id}`);

export const getLocations = () => axios.get("http://localhost:3002/locations");

export const getActions = () => axios.get("http://localhost:3002/actions");
