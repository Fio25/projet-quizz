import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './Components/Accueil';
import PageInscription from './Components/PageInscription';
import PageConnexion from './Components/PageConnexion';
import Categories from './Components/Categories';


function App() {
  return (
    <Router>
    <div className="App">
    
      <Routes>
        <Route exact path="/" element={<Accueil/>} />
        <Route exact path="/PageInscription" element={<PageInscription/>} />
        <Route exact path="/PageConnexion" element={<PageConnexion/>} />
        <Route exact path="/Categories" element={<Categories/>} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;