import React, {useState} from 'react';
import './main.sass'
import {Product} from '../../models/product.model';
import ProductCard from '../../components/product-card/ProductCard';
import {productsMock} from '../../models/products.mock';

export const Main: React.FC = () => {
  const [productList] = useState<Product[]>(productsMock);

  return <div className="main wrapper">
      <ul className="product-list">
        {productList.map(product => {
          return <li key={product.id} className="product-item">
            <ProductCard product={product}/>
          </li>
        })}

      </ul>
    </div>
};
