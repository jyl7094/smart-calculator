import React, { useReducer } from 'react';

import CalcContext from './calc-context';

const defaultState = {
  val: '0',
  expr: '0',
};

const calcReducer = (state, action) => {
  switch (action.type) {
    default:
      return defaultState;
  }
};

const CalcProvider = (props) => {
  const [calcState, dispatch] = useReducer(calcReducer, defaultState);

  const calcCtx = {
    val: calcState.val,
    expr: calcState.expr,
  };

  return (
    <CalcContext.Provider value={calcCtx}>
      {props.children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
