import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={`${styles.button} button__${props.function}`}>
      {props.function}
    </button>
  );
};

export default Button;
