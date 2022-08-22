import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={`${styles[`button__${props.function}`]} ${styles.button}`}
      {...props}
    >
      {props.function}
    </button>
  );
};

export default Button;
