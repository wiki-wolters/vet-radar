import React from 'react';
import propTypes from 'prop-types';
import CartItem from './cart-item';

import './cart.css';

const Cart = ({ lines, total, removeProduct }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {lines.length ?
        <ul className="list cart__list">
          {lines.map(line => (
            <CartItem
              key={line.product.name}
              removeProduct={removeProduct}
              line={line}
            />
          ))}
        </ul> :
        <p>Add a product to your cart</p>
      }
      <div className="price cart__total">Total: ${total.toFixed(2)}</div>
    </div>
  )
}

Cart.propTypes = {
  lines: propTypes.arrayOf(propTypes.shape({
    product: propTypes.shape({
      name: propTypes.string,
      price: propTypes.number
    }),
    qty: propTypes.number
  })),
  total: propTypes.number,
  removeProduct: propTypes.func
}

export default Cart;