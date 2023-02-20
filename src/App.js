import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './Components/Accueil';
import PageInscription from './Components/PageInscription';
import PageConnexion from './Components/PageConnexion';
import Categories from './Components/Categories';
import ModifProfil from './Components/ModifProfil';
import Quizz from './Components/Quizz';



function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Accueil/>} />
        <Route exact path="/PageInscription" element={<PageInscription/>} />
        <Route exact path="/PageConnexion" element={<PageConnexion/>} />
        <Route exact path="/Categories" element={<Categories/>} />
        <Route exact path="/ModifProfil" element={<ModifProfil/>} />
        <Route exact path="/Quizz/:categ" element={<Quizz/>} />
      </Routes>
      
  );
}

export default App;