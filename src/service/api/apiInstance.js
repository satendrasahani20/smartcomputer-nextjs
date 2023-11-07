import axios from "axios";

const baseUrl = () => {
  let Base_url ="http://localhost:9000/"
  //  "https://smartcomputer-api.vercel.app/";
  // http://localhost:9000/

  // if (window?.location?.href?.includes("https://dev")) {
  //   Base_url = "https://api.dev.olibr.com/v1";
  // } else if (window?.location?.href?.includes("https://test")) {
  //   Base_url = "https://api.test.olibr.com/v1";
  // } else if (window?.location?.href?.includes("https://improved")) {
  //   Base_url = "https://api.improved.olibr.com/v1";
  // } else if (window?.location?.href?.includes("https://olibr")) {
  //   Base_url = "https://olibr.com/api/v1";
  // } else if (window?.location?.href?.includes("https://www")) {
  //   Base_url = "https://www.olibr.com/api/v1";
  // }

  return Base_url;
};

const api = axios.create({
  baseURL: baseUrl(), // WithCredentials: true,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + localStorage.getItem("token");

  return config;
});

export default api;