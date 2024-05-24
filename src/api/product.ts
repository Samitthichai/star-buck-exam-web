import { ProductItem } from "../interface/product";
import httpClient from "../lib/http.client";

export const getProduct =
  async (): Promise<ProductItem> => {
    return await httpClient.get("/Product-StarBuck").then((res) => res.data);
  };
