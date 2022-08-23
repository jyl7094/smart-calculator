import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${styles[`button__${props.function}`]} ${styles.button} ${
        styles[`button--${props.buttontype}`]
      }`}
      {...props}
    >
      {props.function}
    </button>
  );
};

export default Button;
