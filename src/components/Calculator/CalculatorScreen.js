import React, { useContext } from 'react';

import CalcContext from '../../context/calc-context';
import styles from './CalculatorScreen.module.css';

const CalculatorScreen = () => {
  const calcCtx = useContext(CalcContext);
  const { input, expr } = calcCtx;
  let fontSize;
  if (input.length < 10 && input.length >= 8) {
    fontSize = 'eightcharfontsize';
  } else if (input.length === 10) {
    fontSize = 'tencharfontsize';
  } else {
    fontSize = '';
  }

  return (
    <div className={styles['calculator-screen']}>
      <p className={styles.expr}>{expr}</p>
      <p
        className={`${styles.input} ${styles[`${fontSize}`]}
        }`}
      >
        {input}
      </p>
    </div>
  );
};

export default CalculatorScreen;
