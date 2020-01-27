import {Product} from '../models/product.model';
import {
  AddProductAction,
  CART_ACTION,
  CartProduct,
  DecrementProductAction, IncrementProductAction,
  RemoveProductAction
} from '../models/cart.model';

export const addProduct = (product: Product): AddProductAction => {
  return {
    type: CART_ACTION.ADD_PRODUCT,
    payload: new CartProduct(product)
  };
};

export const removeProduct = (id: number): RemoveProductAction => {
  return {
    type: CART_ACTION.REMOVE_PRODUCT,
    payload: id
  };
};

export const incrementProduct = (id: number): IncrementProductAction => {
  return {
    type: CART_ACTION.INCREMENT_PRODUCT,
    payload: id
  };
};

export const decrementProduct = (id: number): DecrementProductAction => {
  return {
    type: CART_ACTION.DECREMENT_PRODUCT,
    payload: id
  };
};
