import React from 'react';

const CalcContext = React.createContext({
  val: '0',
  expr: '',
  showC: false,
  warning: false,
  update: (val) => {},
  removeWarning: () => {},
});

export default CalcContext;
