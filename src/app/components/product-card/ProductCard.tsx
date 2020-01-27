import React, {Component} from 'react';
import {Product} from '../../models/product.model';
import './product-card.sass';
import store from '../../stores/root.store';
import {addProduct} from '../../actions/cart.action';

interface ProductCardProps {
  product: Product;
}
class ProductCard extends Component<ProductCardProps> {
  product: Product;
  dispatch = store.dispatch;
  constructor(props: ProductCardProps) {
    super(props);
    this.product = props.product;
  }
  render() {
    return (
      <div className="product-card">
        <p className="product-card__title">{this.product.title}</p>
        <p className="product-card__price">{this.product.price} UAH</p>
        <button onClick={() => this.dispatch(addProduct(this.product))} className="product-card__btn">Add to cart</button>
      </div>);
  }
}

export default ProductCard
