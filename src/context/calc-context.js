import React from 'react';

const CalcContext = React.createContext({
  val: '',
  expr: '',
  update: (val) => {},
});

export default CalcContext;
