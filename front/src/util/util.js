import axios from "axios";

const ipUrl = axios.create({
  baseURL: "http://localhost:8080",
});
export { ipUrl };
