import React, { useContext } from 'react';

import CalcContext from '../../context/calc-context';
import styles from './CalculatorScreen.module.css';

const CalculatorScreen = () => {
  const calcCtx = useContext(CalcContext);
  const {val} = calcCtx;

  return <div className={styles['calculator-screen']}>{val}</div>;
};

export default CalculatorScreen;
