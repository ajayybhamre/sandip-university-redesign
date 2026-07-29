import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/university-backend/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;