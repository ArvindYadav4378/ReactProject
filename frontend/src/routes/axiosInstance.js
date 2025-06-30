// axiosInstance.js
import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Change as per your backend
  headers: {
    "Content-Type": "application/json",
  },
});
