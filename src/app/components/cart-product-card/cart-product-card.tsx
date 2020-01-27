import React from 'react';
import store from '../../stores/root.store';
import {decrementProduct, incrementProduct, removeProduct} from '../../actions/cart.action';
import {CartProduct} from '../../models/cart.model';
import './cart-product-card.sass';

export const CartProductCard: React.FC<CartProduct> = (product: CartProduct) => {
  const dispatch = store.dispatch;
  return <div className="cart-product-card">
    <div className="cart-product-card__header">
      <p className="cart-product-card__title">{product.title}</p>
      <p className="cart-product-card__count">{product.count}</p>
    </div>
    <p className="cart-product-card__price">{product.price} UAH</p>
    <div className="cart-product-card__actions">
      <button onClick={() => dispatch(decrementProduct(product.id))} className="cart-product-card__icon-btn">
        <i className="material-icons">remove_circle</i>
      </button>
      <button onClick={() => dispatch(removeProduct(product.id))} className="cart-product-card__btn">Remove product</button>
      <button onClick={() => dispatch(incrementProduct(product.id))} className="cart-product-card__icon-btn">
        <i className="material-icons">add_circle</i>
      </button>
    </div>
  </div>
};

