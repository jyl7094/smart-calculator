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

  const generateButton = (f) => {
    let buttonType;
    switch (f) {
      case 'AC':
      case 'C':
      case '⌫':
      case '%':
      case '+/-':
        buttonType = 'gry';
        break;
      case '÷':
      case '×':
      case '−':
      case '+':
      case '=':
        buttonType = 'or';
        break;
      case '.':
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      default:
        buttonType = 'blk';
    }
    return (
      <Button
        key={f}
        function={f}
        id={f}
        buttontype={buttonType}
        onClick={() => handleClick(f)}
      />
    );
  };

  const buttonsList = buttons.map((button) => generateButton(button));

  const handleClick = (button) => {
    calcCtx.update(button);
  };

  return (
    <main>
      <div className={styles.calculator}>
        <CalculatorScreen />
        {calcCtx.showC ? generateButton('C') : generateButton('AC')}
        {/* {generateButton('AC')} */}
        {buttonsList}
      </div>
    </main>
  );
};

export default Calculator;
