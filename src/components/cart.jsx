import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';

import './cart.css';

const Cart = ({ lines, total, removeProduct }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {lines.length ?
        <ul className="list cart__list">
          {lines.map(line =>
            <li className="cart__item">
              <span className="cart__item-name">{line.product.name}</span>
              <span className="price cart__item-price">${line.product.price.toFixed(2)}</span>
              <span className="cart__item-qty">&nbsp;x {line.qty}</span>
              <span className="price cart__item-total">${(line.product.price * line.qty).toFixed(2)}</span>
              <DeleteIcon className="icon cart__item-delete" onClick={e => removeProduct(line.product)}/>
            </li>
          )}
        </ul> :
        <p>Add a product to your cart</p>
      }
      <div className="price cart__total">Total: ${total.toFixed(2)}</div>
    </div>
  )
}

export default Cart;