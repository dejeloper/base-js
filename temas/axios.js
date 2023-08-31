import axios from "axios";
import { apiKey, apiEndPoint } from "./fecth_api.js";

const api = axios.create({
  baseURL: apiEndPoint,
  params: {
    api_key: apiKey,
  },
});

api
  .get("/random")
  .then((resp) => {
    // const url = resp.data.data.images.original.url;
    const { data } = resp.data;
    const { url } = data.images.original;

    console.log(url);
  })
  .catch(console.log);
