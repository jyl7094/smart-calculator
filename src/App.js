import React from 'react';

import CalcProvider from './context/CalcProvider';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import History from './components/History/History';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <CalcProvider>
      <Header />
      <Calculator />
      <History />
      <Footer />
    </CalcProvider>
  );
};

export default App;
