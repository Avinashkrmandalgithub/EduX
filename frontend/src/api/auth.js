import API from '../api/axios.js';

export const signup = (data) =>  API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);
export const logout = (data) => API.post("/auth/logout", data);
export const getProfile = (data) => API.get("/auth/me", data)