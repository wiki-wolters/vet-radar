import React from 'react';
import propTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';

class CartItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
  }

  handleRemoveProduct() {
    this.props.removeProduct(this.props.line.product)
  }

  render() {
    const { line } = this.props;

    return (
      <li className="cart__item" key={line.product.name}>
        <span className="cart__item-name">{line.product.name}</span>
        <span className="price cart__item-price">${line.product.price.toFixed(2)}</span>
        <span className="cart__item-qty">&nbsp;x {line.qty}</span>
        <span className="price cart__item-total">${(line.product.price * line.qty).toFixed(2)}</span>
        <DeleteIcon className="icon cart__item-delete" onClick={this.handleRemoveProduct} />
      </li>
    )
  }
}

CartItem.propTypes = {
  removeProduct: propTypes.func,
  line: propTypes.shape({
    product: propTypes.shape({
      name: propTypes.string,
      price: propTypes.number
    }),
    qty: propTypes.number
  })
};

export default CartItem;