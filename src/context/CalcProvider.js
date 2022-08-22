import React, { useEffect, useReducer } from 'react';

import * as math from 'mathjs';

import CalcContext from './calc-context';

// const UPDATE = 'UPDATE';

const defaultState = {
  input: '',
  expr: '',
};

const calcReducer = (state, action) => {
  let updatedInput;
  let updatedExpr;
  switch (action.input) {
    case 'AC':
      return defaultState;
    case 'C':
      return {
        input: '',
        expr: state.expr,
      };
    case '⌫':
    case '%':
    case '+/-':

    case '÷':
    case '×':
    case '−':
    case '+':
    case '=':
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
      return defaultState;
  }
};

const CalcProvider = (props) => {
  const [calcState, dispatch] = useReducer(calcReducer, defaultState);

  const handleUpdate = (input) => {
    dispatch({ input: input });
  };

  const calcCtx = {
    input: calcState.input,
    expr: calcState.expr,
    update: handleUpdate,
  };

  // useEffect(() => console.log(calcCtx.expr), [calcCtx]);

  return (
    <CalcContext.Provider value={calcCtx}>
      {props.children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
