export interface CartItem {
    id:number;
    quantity: number;
}

export interface CartData {
  carts: CartItem[]; 
}