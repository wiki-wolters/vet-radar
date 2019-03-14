import React from 'react';
import propTypes from 'prop-types';
import products from '../data/products';
import ProductItem from './product-item';

import './products.css';

const Products = ({ addProduct }) => {
  return (
    <div className="products">
      <h2>Our Products</h2>
      <ul className="list products__list">
        {products.map(product => (
          <ProductItem
            key={product.name}
            product={product}
            addProduct={addProduct}
          />
        ))}
      </ul>
    </div>
  );
};

Products.propTypes = {
  addProduct: propTypes.func
}

export default Products;