import './Accueil.css'
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './PageInscription'
import './PageConnexion'
import './Categories'

function Accueil() {
  const [isConnected, setIsConnected] = useState(false);

  const storage = window.localStorage;

  useEffect(() => {
    const isConnected = storage.getItem('isConnected');
    setIsConnected(!!isConnected);
  });

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
        <a className='deconnexion' onClick={handleLogout}>
          Se deconnecter
        </a>
        ) 
        : 
        (
          <Link className="btnAccueil" to="./PageInscription">Inscription</Link>
        )}

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
          

        
      </div>

    </div>
  )
}

export default Accueil