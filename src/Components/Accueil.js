import React, { useState, useEffect } from 'react'
import './Accueil.css'
import {Link} from 'react-router-dom'
import './PageInscription'
import './PageConnexion'
import './Categories'

function Accueil() {

  const storage = window.localStorage;
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const isConnected = storage.getItem('isConnected');
    setIsConnected(!!isConnected);
  });

  //Fonction pour se déconnecter
  const handleLogout = () => {
    storage.removeItem('isConnected');
    storage.removeItem('userID');
    setIsConnected(false)
  }

  return (
    <div className="block-accueil">
      
      <h1>STUDY QUIZZ</h1>

      <div className="block-btnAccueil">

        {isConnected? (
          <Link className="btnAccueil" to="./ModifProfil">Profil</Link>
        ) 
        : 
        (
          <Link className="btnAccueil" to="./PageConnexion">Connexion</Link>
        )}

        {isConnected? (
          <Link className="btnAccueil" to="./Categories">Quizz</Link>
        ) 
        : 
        (
          <Link className="btnAccueil" to="./Categories">Jouer en tant qu'invité</Link>
        )}
          
        {isConnected? (
        <button className="btn-deconnexion" onClick={handleLogout}>
          Se déconnecter
        </button>
        ) 
        : 
        (
          <Link className="btnAccueil" to="./PageInscription">Inscription</Link>
        )}
        
      </div>

    </div>
  )
}

export default Accueil;