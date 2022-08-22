import React, { useState } from 'react';

import CalcProvider from './context/CalcProvider';
import Instructions from './components/Instructions/Instructions'
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import History from './components/History/History';
import Footer from './components/Footer/Footer';

const App = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const handleOpen = () => {
    setShowInstructions(true);
  };

  const handleClose = () => {
    console.log('h')
    setShowInstructions(false);
  };

  return (
    <CalcProvider>
      {showInstructions && <Instructions onClose={handleClose} />}
      <Header onOpen={handleOpen} />
      <Calculator />
      <History />
      <Footer />
    </CalcProvider>
  );
};

export default App;
