import React from 'react';

import GlobalStyles from '~/styles/global';

import Header from '~/components/Header';
import DashBoard from '~/pages/DashBoard';

function App() {
  return (
    <>
      <Header />
      <DashBoard />
      <GlobalStyles />
    </>
  );
}

export default App;
