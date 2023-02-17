import './Accueil.css'
import React from 'react'
import {Link} from 'react-router-dom'
import './PageInscription'
import './PageConnexion'
import './Categories'

function Accueil() {
  return (
    <div className="block-accueil">
      
      <h1>STUDY QUIZZ</h1>

      <div className="block-btnAccueil">
        <Link className="btnAccueil" to="./PageInscription">Inscription</Link>
        <Link className="btnAccueil" to="./PageConnexion">Connexion</Link>
        <Link className="btnAccueil" to="./Categories">Jouer en tant qu'invité</Link>
      </div>

    </div>
  )
}

export default Accueil