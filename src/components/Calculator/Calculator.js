import React from 'react';

import CalculatorScreen from './CalculatorScreen';
import Button from '../UI/Button/Button';
import styles from './Calculator.module.css';

const buttons = [
  'AC',
  '⌫',
  '%',
  '÷',
  '7',
  '8',
  '9',
  '×',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '+/-',
  '=',
];

const Calculator = () => {
  const buttonsList = buttons.map((button) => (
    <Button key={button} function={button} />
  ));

  return (
    <main>
      <div className={styles.calculator}>
        <CalculatorScreen />
        {buttonsList}
      </div>
    </main>
  );
};

export default Calculator;
