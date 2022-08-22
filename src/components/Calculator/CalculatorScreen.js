import React, { useContext } from 'react';

import CalcContext from '../../context/calc-context';
import styles from './CalculatorScreen.module.css';

const CalculatorScreen = () => {
  const calcCtx = useContext(CalcContext);
  const { input } = calcCtx;
  // const display = input === '-'

  return <div className={styles['calculator-screen']}>{input || '0'}</div>;
};

export default CalculatorScreen;
