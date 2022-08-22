import React from 'react';

import Modal from '../UI/Modal';
import styles from './Instructions.module.css';

const Instructions = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={styles.container}>
        <h2 className={styles.greeting}>Hey!</h2>
        <br />
        <p>
          &emsp;This is not just a calculator, but a smart one. It is really
          simple to use, but its functions are not so simple, and better.
          <br />
          <br />
          &emsp;Here's how to use the Smart Calculator:
          <br />
          <br />
        </p>
        <ol className={styles.ol}>
          <li>Enter a valid math expression.</li>
          <li>Press the "=" button to evaluate the expression.</li>
          <li>
            You will get the result, and this result will also get added to the
            history section.
          </li>
          <li>
            If you need to re-evaluate a previous expression, just retrieve that
            expression from the history section by clicking it.
          </li>
          <li>Make necessary changes, then press the "=" for re-evaluation.</li>
        </ol>
        <br />
        <p>
          &emsp;Warning: Once you leave the site, your calculator history will
          get erased!
        </p>
      </div>
    </Modal>
  );
};

export default Instructions;
