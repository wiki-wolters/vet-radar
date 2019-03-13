import React from 'react';
import products from '../data/products';
import AddIcon from '@material-ui/icons/AddCircleOutline';

import './products.css';

const Products = props => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <ul className="list products__list">
        {products.map(product =>
          <li className="products__item">
            <span className="products__item-name">{product.name}</span>
            <span className="price products__price">${product.price.toFixed(2)}</span>
            <AddIcon className="icon products__item-add" onClick={e => props.addProduct(product, 1)}/>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Products;