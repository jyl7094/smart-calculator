import React from 'react';

const CalcContext = React.createContext({
  val: '0',
  expr: '',
  showC: false,
  del: false,
  update: (val) => {},
});

export default CalcContext;
