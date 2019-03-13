import { combineReducers } from 'redux'

const lines = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_PRODUCT':
      return state.filter(line => line.product.name !== action.product.name);
    case 'ADD_PRODUCT':
      const newState = [];
      let productExistsInCart = false;

      //check if product already exists in cart
      state.forEach(line => {
        if (line.product.name === action.product.name) {
          newState.push(Object.assign({}, line, {
            qty: line.qty + action.qty
          }));
          productExistsInCart = true;
        } else {
          newState.push(line);
        }
      });

      if (!productExistsInCart) {
        newState.push({
          product: action.product,
          qty: action.qty
        })
      }

      return newState;
    default:
      return state;
  }
}

const total = (state = 0, action) => {
  switch (action.type) {
    case 'SET_TOTAL':
      return action.total;
    default:
      return state;
  }
}

const searchApp = combineReducers({
  lines,
  total
})

export default searchApp