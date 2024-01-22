import React from "react";
import styles from "./SubmitButton.module.css"; // Importando o arquivo CSS do módulo

const SubmitButton = ({ text }) => {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
};

export default SubmitButton;
