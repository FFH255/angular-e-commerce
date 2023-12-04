export interface IProduct extends ICreateProduct {
  id: number;
  rating: {
    count: number;
    rate: number;
  };
}

export interface ICreateProduct {
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
}
