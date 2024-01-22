import React from 'react';

import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={`${styles.home_container} ${styles.min_height}`}>
      <h1>
        Bem-vindo ao <span className={styles.costs_text}>Costs</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/novoProjeto" text="Criar Projeto!" />
      <img src={savings} alt="Costs" />
    </section>
  );
};

export default Home;
