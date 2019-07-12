import axios from 'axios';
export const getUsers = () => axios.get("http://localhost:3100/api/users")
// https://cors-anywhere.herokuapp.com/
