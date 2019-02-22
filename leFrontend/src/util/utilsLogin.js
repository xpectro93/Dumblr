import axios from 'axios';
export const getLocations = () => axios.get("https://ghibliapi.herokuapp.com/locations")

export const signUp = user => axios.post("")
