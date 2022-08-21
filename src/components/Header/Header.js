import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  console.log('Header rendered');
  return (
    <header className={styles.header}>
      <h1>Smart Calculator</h1>
    </header>
  );
};

export default React.memo(Header);
