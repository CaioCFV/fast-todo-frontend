import React from 'react';
import Signup from './pages/Signup';
import {Provider} from 'react-redux';
import store from './store'
import ModalHandler from './components/ModalHandler';

function App() {
  return (
      <Provider store={store}>
        <Signup />
        <ModalHandler />
      </Provider>
  );
}


export default App;

