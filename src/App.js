import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Components/Accueil';
import PageInscription from './Components/PageInscription';
import PageConnexion from './Components/PageConnexion';
import Categories from './Components/Categories';
import ModifProfil from './Components/ModifProfil';

function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<Accueil/>} />
        <Route exact path="/PageInscription" element={<PageInscription/>} />
        <Route exact path="/PageConnexion" element={<PageConnexion/>} />
        <Route exact path="/Categories" element={<Categories/>} />
        <Route exact path="/ModifProfil" element={<ModifProfil/>} />
      </Routes>

    </Router>
  );
}

export default App;