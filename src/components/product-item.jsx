import React from 'react';
import propTypes from 'prop-types';
import AddIcon from '@material-ui/icons/AddCircleOutline';

class ProductItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct() {
    this.props.addProduct(this.props.product, 1);
  }

  render() {
    const { product } = this.props;

    return (
      <li className="products__item">
        <span className="products__item-name">{product.name}</span>
        <span className="price products__price">${product.price.toFixed(2)}</span>
        <AddIcon className="icon products__item-add" onClick={this.handleAddProduct} />
      </li>
    )
  }
}

ProductItem.propTypes = {
  addProduct: propTypes.func,
  product: propTypes.shape({
    name: propTypes.string,
    price: propTypes.number
  })
};

export default ProductItem;