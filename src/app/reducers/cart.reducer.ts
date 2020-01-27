import {CART_ACTION, CartActionTypes, CartModel, CartProduct} from '../models/cart.model';

export const initialState: CartModel = {
  products: []
};

const cartReducer = (state: CartModel = initialState, action: CartActionTypes): CartModel => {
  switch (action.type) {
    case CART_ACTION.ADD_PRODUCT:
      const findProduct = state.products.find(product => product.id === action.payload.id);
      if (findProduct) {
        console.log(`The product: ${action.payload.title} is already in the basket`);
        return state;
      }
      return {...state, products: [...state.products, action.payload]};
    case CART_ACTION.REMOVE_PRODUCT:
      const newProductList = state.products.filter(product => product.id !== action.payload);
      return {...state, products: newProductList};
    case CART_ACTION.INCREMENT_PRODUCT:
      const incProducts = state.products.map((product: CartProduct) => {
        if (product.id === action.payload) {
          return Object.assign({}, product, {
            count: product.count + 1
          });
        } else {
          return product;
        }
      });
      return {...state, products: [...incProducts]};
    case CART_ACTION.DECREMENT_PRODUCT:
      const decProducts = state.products.map((product: CartProduct) => {
        if (product.id === action.payload) {
          return Object.assign({}, product, {
            count: product.count - 1
          });
        } else {
          return product;
        }
      });
      return {...state, products: [...decProducts]};
    default:
      return state;
  }
};

export default cartReducer;
