import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './toolbar.sass'
import {CartModel} from '../../models/cart.model';
import {connect} from 'react-redux';
import {Store} from '../../models/store.model';

class Toolbar extends Component<CartModel> {
  getTotal(): number {
    return this.props.products.length;
  }
  render () {
    return (
      <div className="toolbar">
        <div className="toolbar__wrap wrapper">
          <h1 className="toolbar__logo">React typescript sass</h1>
          <nav>
            <ul className="toolbar__nav">
              <li className="toolbar__nav-item">
                <NavLink to='/' className="toolbar__nav-link" exact>Main</NavLink>
              </li>
              <li className="toolbar__nav-item">
                <NavLink to="/cart" className="toolbar__nav-link">
                  <i className="material-icons md-dark">shopping_cart</i>
                  <span className="toolbar__badge badge">{this.getTotal()}</span>
                </NavLink>
              </li>
            </ul>
          </nav>
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

export default connect(mapStateToProps)(Toolbar);
