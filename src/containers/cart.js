import { connect } from 'react-redux'
import Component from '../components/cart';
import { removeProduct } from '../actions';

export default connect(state => ({
  lines: state.lines,
  total: state.total
}), {
  removeProduct
})(Component);