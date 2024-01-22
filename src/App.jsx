import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import Home from './components/pages/Home';
import NovoProjeto from './components/pages/NovoProjeto';
import Projetos from './components/pages/Projetos';
import Projeto from './components/pages/Projeto';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Container customClass="min-height">
              <Home />
            </Container>
          }
        />
        <Route
          path="/empresa"
          element={
            <Container customClass="min-height">
              <Empresa />
            </Container>
          }
        />
        <Route
          path="/contato"
          element={
            <Container customClass="min-height">
              <Contato />
            </Container>
          }
        />
        <Route
          path="/novoProjeto"
          element={
            <Container customClass="min-height">
              <NovoProjeto />
            </Container>
          }
        />
        <Route
          path="/projetos"
          element={
            <Container customClass="min-height">
              <Projetos />
            </Container>
          }
        />
        <Route
          path="/projeto/:id"
          element={
            <Container customClass="min-height">
              <Projeto />
            </Container>
          }
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
