import axios from "axios";

export const apiConfig = {
  HTTPS: "https://localhost:5001/api",
  HTTP: "http://localhost:5000/api",
};

export const api = axios.create({
  baseURL: apiConfig.HTTPS,
  headers: {
    "Content-Type": "application/json",
  },
});