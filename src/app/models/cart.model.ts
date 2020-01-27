import {Product} from './product.model';

// Models

export class CartProduct implements Product {
  id: number;
  price: number;
  title: string;
  count: number;
  constructor(product: Product) {
    this.id = product.id;
    this.price = product.price;
    this.title = product.title;
    this.count = 1;
  }
}

// Store

export interface CartModel {
  products: CartProduct[]
}

// Actions

export enum CART_ACTION {
  ADD_PRODUCT = 'add_product',
  REMOVE_PRODUCT = 'remove_product',
  INCREMENT_PRODUCT = 'increment_product',
  DECREMENT_PRODUCT = 'decrement_product',
}

export interface AddProductAction {
  type: CART_ACTION.ADD_PRODUCT;
  payload: CartProduct
}

export interface RemoveProductAction {
  type: CART_ACTION.REMOVE_PRODUCT;
  payload: number;
}

export interface IncrementProductAction {
  type: CART_ACTION.INCREMENT_PRODUCT;
  payload: number;
}

export interface DecrementProductAction {
  type: CART_ACTION.DECREMENT_PRODUCT;
  payload: number;
}

export type CartActionTypes = AddProductAction | RemoveProductAction | IncrementProductAction | DecrementProductAction;
