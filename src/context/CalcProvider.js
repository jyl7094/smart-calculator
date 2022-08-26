import React, { useReducer } from 'react';

import * as math from 'mathjs';

import CalcContext from './calc-context';

const op = {
  '÷': '/',
  '×': '*',
  '−': '-',
  '+': '+',
};

const defaultState = {
  input: '0',
  expr: '',
  showC: false,
  warning: false,
};

const calcReducer = (state, action) => {
  let updatedInput;
  let updatedExpr;
  let updatedWarning = false;
  let operator;

  if (action.removeWarning) {
    return {
      ...state,
      warning: false,
    };
  }
  switch (action.input) {
    case 'AC':
      return defaultState;
    case 'C':
      return {
        ...defaultState,
        expr: state.expr,
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
        ...state,
        input: updatedInput,
      };
    case '%':
      if (state.input === 'Error') {
        return state;
      }
      updatedInput = (Number(state.input) / 100).toString();
      if (updatedInput.length >= 10) {
        updatedInput = state.input;
        updatedWarning = true;
      }
      return {
        ...state,
        input: updatedInput,
        warning: updatedWarning,
      };
    case '+/-':
      // maybe check state.expr includes % 0 or (%) to return error for using +/- when Error -> -0 -this stage->
      if (state.input === 'Error' || state.input === '0') {
        updatedInput = '-0';
        return {
          ...state,
          input: updatedInput,
        };
      } else if (state.input === '-0') {
        if (state.expr === 'Error') {
          return {
            ...state,
            input: 'Error',
          };
        }
        updatedInput = '0';
        return {
          ...state,
          input: updatedInput,
        };
      }
      if (state.input[0] === '-') {
        updatedInput = state.input.substring(1, state.input.length);
      } else {
        updatedInput = '-'.concat(state.input);
      }
      return {
        ...state,
        input: updatedInput,
        showC: true,
      };
    case '÷':
    case '×':
    case '−':
    case '+':
      // Needs fix when dealing with new input after evalutaing using =
      if (state.input === 'Error') {
        return state;
      }
      const eq = math.evaluate(state.expr + state.input);
      console.log(state.expr);
      if (eq === Infinity) {
        return {
          ...state,
          input: 'Error',
          expr: 'Error',
        };
      }
      if (state.expr.length >= 84) {
        return {
          ...state,
          warning: true,
        };
      }
      operator = op[action.input];
      updatedExpr = state.expr + state.input + operator;
      return {
        ...state,
        input: '0',
        expr: updatedExpr,
      };
    // break;
    case '=':
      return {
        ...state,
        expr: state.expr + state.input,
        input: math.evaluate(state.expr + state.input).toString(),
      };
    // break;
    case '.':
      if (state.input.includes('.') || state.input.length >= 9) {
        return state;
      }
      updatedInput = state.input + action.input;
      return {
        ...state,
        input: updatedInput,
        showC: true,
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
      if (state.input.length >= 9 || state.input === 'Error ') {
        return state;
      }
      if (state.input === '0') {
        updatedInput = action.input;
        if (action.input === '0') {
          return {
            ...state,
            input: updatedInput,
          };
        }
      } else if (state.input === '-0') {
        updatedInput = '-'.concat(action.input);
      } else {
        updatedInput = state.input + action.input;
      }
      return {
        ...state,
        input: updatedInput,
        showC: true,
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

  const handleWarning = () => {
    dispatch({ removeWarning: true });
  };

  const calcCtx = {
    input: calcState.input,
    expr: calcState.expr,
    showC: calcState.showC,
    warning: calcState.warning,
    update: handleUpdate,
    removeWarning: handleWarning,
  };

  // useEffect(() => console.log(calcCtx.warning), [calcCtx.warning]);

  return (
    <CalcContext.Provider value={calcCtx}>
      {props.children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
