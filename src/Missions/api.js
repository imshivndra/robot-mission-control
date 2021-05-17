import axios from "axios";

export const getRobots = () => axios.get("http://localhost:3002/robots");

export const getMissions = () => axios.get("http://localhost:3002/missions");

export const getMission = (id) => axios.get(`http://localhost:3002/robots/${id}`);

export const getLocations = () => axios.get("http://localhost:3002/locations");

export const getActions = () => axios.get("http://localhost:3002/actions");
