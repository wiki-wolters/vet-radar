
const getLinesTotal = lines => {
  let total = 0;
  lines.forEach(line => {
    total += line.product.price * line.qty;
  });

  return total;
}

export const setTotal = total => ({
  type: 'SET_TOTAL',
  total
})

export const addProduct = (product, qty) => (dispatch, getState) => {
  dispatch({
    type: 'ADD_PRODUCT',
    product,
    qty
  });

  dispatch(setTotal(getLinesTotal(getState().lines)));
}

export const removeProduct = (product, qty) => (dispatch, getState) => {
  dispatch({
    type: 'REMOVE_PRODUCT',
    product,
    qty
  });

  dispatch(setTotal(getLinesTotal(getState().lines)));
}