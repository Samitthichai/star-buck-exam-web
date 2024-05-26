import axios, { AxiosResponse } from "axios";

const baseURL = "https://6650a4caec9b4a4a6032d920.mockapi.io/api";

const httpClient = axios.create({
  baseURL,
});

export default httpClient;
