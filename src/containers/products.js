import { connect } from 'react-redux'
import Component from '../components/products';
import { addProduct } from '../actions';

export default connect(null, {
  addProduct
})(Component);