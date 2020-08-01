import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import store from './store'
import ModalHandler from './components/ModalHandler';

function App() {
  return (
      <Provider store={store}>
        <Routes />
        <ModalHandler />
      </Provider>
  );
}


export default App;

