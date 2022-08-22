import React, { useContext } from 'react';

import CalculatorScreen from './CalculatorScreen';
import CalcContext from '../../context/calc-context';
import Button from '../UI/Button';
import styles from './Calculator.module.css';

const buttons = [
  '⌫',
  '%',
  '+/-',
  '÷',
  '×',
  '−',
  '+',
  '=',
  '.',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

const Calculator = () => {
  const calcCtx = useContext(CalcContext);

  const generateButton = (f) => (
    <Button key={f} function={f} id={f} onClick={() => handleClick(f)} />
  );

  const buttonsList = buttons.map((button) => generateButton(button));

  const handleClick = (button) => {
    calcCtx.update(button);
  };

  return (
    <main>
      <div className={styles.calculator}>
        <CalculatorScreen />
        {calcCtx.input ? generateButton('C') : generateButton('AC')}
        {buttonsList}
      </div>
    </main>
  );
};

export default Calculator;
