import axios from 'axios';
export const getUsers = () => axios.get("http://localhost:3210/users")
