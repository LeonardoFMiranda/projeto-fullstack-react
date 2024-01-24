import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/costs_logo.png";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li className={styles.item}>
          <Link to="/projetos">Projetos</Link>
        </li>
        <li className={styles.item}>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
