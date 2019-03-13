import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import storeCreator from '../store';
import { Provider } from 'react-redux';
import Products from '../containers/products';
import Cart from '../containers/cart';
import './app.css';

const { store, persistor } = storeCreator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container">
          <h1>Hardware store</h1>

          <Cart />
          <Products />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;