import React, { useEffect, useReducer } from 'react';

// import * as math from 'mathjs';

import CalcContext from './calc-context';

// const UPDATE = 'UPDATE';

const defaultState = {
  input: '0',
  expr: '',
  showC: false,
  del: false,
};

const calcReducer = (state, action) => {
  let updatedInput;
  let updatedExpr;
  let updatedShowC;
  switch (action.input) {
    case 'AC':
      return defaultState;
    case 'C':
      return {
        input: '0',
        expr: state.expr,
        showC: false,
        del: false,
      };
    case '⌫':
      if (state.input === 'Error') {
        return state;
      }
      if (state.input === '-0' || state.input === '0') {
        updatedInput = '0';
      } else if (state.input[0] === '-' && state.input.length === 2) {
        updatedInput = '-0';
      } else {
        updatedInput = state.input.substring(0, state.input.length - 1);
        if (!updatedInput) {
          updatedInput = '0';
        }
      }
      return {
        input: updatedInput,
        expr: state.expr,
        showC: state.showC,
        del: true,
      };
    case '%':
      // if (state.input.length >= 7) {
      // This need to be fixed!
      // return {
      //     input: 'Error',
      //     expr: state.expr,
      //     showC: state.showC,
      //   };
      // }
      if (state.input === 'Error') {
        return state;
      }
      updatedInput = (Number(state.input) / 100).toString();
      return {
        input: updatedInput,
        expr: state.expr,
        showC: state.showC,
        del: state.del,
      };
    // break;
    case '+/-':
      // maybe check state.expr includes % 0 to return error for using +/- when Error -> -0 -this stage->
      // updatedShowC = state.del ? true : false;
      if (state.input === 'Error' || state.input === '0') {
        updatedInput = '-0';
        return {
          input: updatedInput,
          expr: state.expr,
          // showC: updatedShowC,
          showC: state.updatedShowC,
          del: state.del,
        };
      } else if (state.input === '-0') {
        updatedInput = '0';
        return {
          input: updatedInput,
          expr: state.expr,
          // showC: updatedShowC,
          showC: state.updatedShowC,
          del: state.del,
        };
      } else if (state.input[0] === '-') {
        updatedInput = state.input.substring(1, state.input.length);
      } else {
        updatedInput = '-'.concat(state.input);
      }
      return {
        input: updatedInput,
        expr: state.expr,
        showC: true,
        del: state.del,
      };
    case '÷':
    case '×':
    case '−':
    case '+':
    case '=':
    // break;
    case '.':
      if (state.input.includes('.') || state.input.length >= 9) {
        return state;
      }
      updatedInput = state.input + action.input;
      return {
        input: updatedInput,
        expr: state.expr,
        showC: true,
        del: state.del,
      };
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
      if (state.input.length >= 9) {
        return state;
      }
      if (state.input === '0') {
        updatedInput = action.input;
        if (action.input === '0') {
          updatedShowC = state.del ? true : false;
          return {
            input: updatedInput,
            expr: state.expr,
            showC: updatedShowC,
            del: state.del,
          };
        }
      } else if (state.input === '-0') {
        updatedInput = '-'.concat(action.input);
      } else {
        updatedInput = state.input + action.input;
      }
      return {
        input: updatedInput,
        expr: state.expr,
        showC: true,
        del: state.del,
      };
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
    showC: calcState.showC,
    del: calcState.del,
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
