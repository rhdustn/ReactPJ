import axios from "axios";

const ipUrl = axios.create({
  baseURL: "http://54.180.79.214:8080",
  withCredentials: true,
});
export { ipUrl };
