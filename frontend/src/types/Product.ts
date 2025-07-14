export interface ProductData {
  id: number;
  name: string;
  price: number;
  discount?: number;
  finaleprice: number;
  photo: string;
  color: string;
  description?: string;
  confirmed: boolean;
  quantity: number;
}
