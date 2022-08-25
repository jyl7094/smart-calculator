import React, { useContext, useEffect } from 'react';

import CalcContext from '../../context/calc-context';
import styles from './CalculatorScreen.module.css';

const CalculatorScreen = () => {
  const calcCtx = useContext(CalcContext);
  const { input, expr } = calcCtx;
  const warningMsg =
    "Operation canceled because the value after this won't fit the screen.";
  let fontSize;
  if (input.length < 10 && input.length >= 8) {
    fontSize = 'eightcharfontsize';
  } else if (input.length === 10) {
    fontSize = 'tencharfontsize';
  } else {
    fontSize = '';
  }
  // const display = expr === 'Error' ? '' : expr; 

  useEffect(() => {
    let timer;
    if (calcCtx.warning) {
      timer = setTimeout(() => {
        calcCtx.removeWarning();
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [calcCtx.warning]);

  const display = calcCtx.warning ? (
    <p className={`${styles.expr} ${styles.warning}`}>{warningMsg}</p>
  ) : (
    <p className={styles.expr}>{expr === 'Error' ? '' : expr}</p>
  );

  return (
    <div className={styles['calculator-screen']}>
      {display}
      <p className={`${styles.input} ${styles[`${fontSize}`]}`}>{input}</p>
    </div>
  );
};

export default CalculatorScreen;
