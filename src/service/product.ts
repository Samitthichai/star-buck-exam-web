import { ProductItem } from "../interface/product";
import httpClient from "../lib/http.client";

export const getAllProduct = async (): Promise<ProductItem[]> => {
  return httpClient.get("starbuck-product").then(({ data }) => data);
};

export const getProductById = async (id?: string): Promise<ProductItem> => {
  return httpClient.get(`/starbuck-product/${id}`).then(({ data }) => data);
};
