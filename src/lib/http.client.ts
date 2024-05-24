import axios, { AxiosResponse } from "axios";


const baseURL = "https://6650a4caec9b4a4a6032d920.mockapi.io/product/";

const httpClient = axios.create({
  baseURL,
});

export const fetchProductData = async () => {
  try {
    const response: AxiosResponse = await httpClient.get("/Product-StarBuck");
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};

export default httpClient;
