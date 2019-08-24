import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/reactotronConfig';

import GlobalStyles from '~/styles/global';
import { store, persistor } from './store';

import Header from '~/components/Header';
import DashBoard from '~/pages/DashBoard';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        <DashBoard />
        <GlobalStyles />
      </PersistGate>
    </Provider>
  );
}

export default App;
