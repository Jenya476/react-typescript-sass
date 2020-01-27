import React, {Component} from 'react';
import {Product} from '../../models/product.model';
import './product-card.sass';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import * as CartActionCreators from '../../actions/cart.action';
import {AddProductAction} from '../../models/cart.model';

interface ProductCardProps {
  product: Product;
  addProduct: (product: Product) => AddProductAction;
}

class ProductCard extends Component<ProductCardProps> {
  product: Product;

  constructor(props: ProductCardProps) {
    super(props);
    this.product = props.product;
  }

  render() {
    return (
      <div className="product-card">
        <p className="product-card__title">{this.product.title}</p>
        <p className="product-card__price">{this.product.price} UAH</p>
        <button onClick={() => this.props.addProduct(this.product)} className="product-card__btn">Add to cart</button>
      </div>);
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(CartActionCreators, dispatch);
}

export default connect(undefined, mapDispatchToProps)(ProductCard);
