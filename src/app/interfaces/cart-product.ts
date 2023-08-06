import { Product } from '../classes/product';

export interface CartProduct extends Product {
  amount: number;
}
