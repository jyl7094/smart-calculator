import React from 'react';

import styles from './Header.module.css';

const Header = (props) => {
  console.log('Header rendered');
  return (
    <header className={styles.header}>
      <h1>
        Smart
        <br />
        Calculator
      </h1>
      <br />
      <h6 className={styles.instructions} onClick={props.onOpen}>
        Instructions
      </h6>
    </header>
  );
};

export default React.memo(Header);
