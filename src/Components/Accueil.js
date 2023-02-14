import './Accueil.css'
import React from 'react'
import {Link} from 'react-router-dom'
import PageInscription from './PageInscription'
import PageConnexion from './PageConnexion'
import Categories from './Categories'

function Accueil() {
  return (
    <div>
      
      <h1>STUDY QUIZZ</h1>

      <Link className="btnAccueil" to="./PageInscription">Inscription</Link>
      <Link className="btnAccueil" to="./PageConnexion">Connexion</Link>
      <Link className="btnAccueil" to="./Categories">Jouer en tant qu'invité</Link>

    </div>
  )
}

export default Accueil