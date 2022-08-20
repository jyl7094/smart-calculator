import React from 'react';

import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import History from './components/History/History';

const App = () => {
  return (
    <div className={"container"}>
      <Header />
      <Calculator />
      <History />
    </div>
  );
};

export default App;
