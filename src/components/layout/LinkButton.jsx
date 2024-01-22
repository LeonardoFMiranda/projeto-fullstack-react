import React from 'react';
import styles from './LinkButton.module.css'; // Importando o arquivo CSS do módulo
import { Link } from 'react-router-dom';

function LinkButton({ to, text }) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
}

export default LinkButton;
