import React, {Component} from 'react';
import './cart.sass';
import {CartProductCard} from '../../components/cart-product-card/cart-product-card';
import {CartModel, CartProduct} from '../../models/cart.model';
import {connect} from 'react-redux';
import {Store} from '../../models/store.model';

class Cart extends Component<CartModel> {
  getProducts(): CartProduct[] {
    return this.props.products;
  };
  getSum(): number {
    let sum = 0;
    this.getProducts().forEach(product => {
      sum += product.price * product.count
    });
    return sum;
  };
  render() {
    return (
      <div className="cart wrapper">
        <ul className="product-list">
          {this.getProducts().map(product => {
            return <li key={product.id} className="product-item">
              {CartProductCard(product)}
            </li>
          })}
        </ul>
        <div className="cart__card">
          <p className="sum">Total sum: {this.getSum()} UAH</p>
          <button className="buy">Buy</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: Store): CartModel {
  return {
    products: state.cart.products
  }
}

export default connect(mapStateToProps)(Cart);
