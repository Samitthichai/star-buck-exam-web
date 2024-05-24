export interface ProductItem {
    id: number;
    name: string;
    description: string;
    price: number;
    region: string;
    weight: number;
    flavor_profile: string[];
    grind_option: string[];
    roast_level: number;
    image_url: string;
    stock: number;
  }

  export interface INewsReportWithPaginate {
    data: ProductItem[];
    limit: number;
    nextPage: number;
    page: number;
    prevPage: number;
    total: number;
    totalPage: number;
  }