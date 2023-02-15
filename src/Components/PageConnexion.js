import React from 'react'
import './PageConnexion.css'
import {Link} from 'react-router-dom'

function PageConnexion() {
  
  return (
    
    <><Link className="back-arrow" to="/"><i class="fa-solid fa-arrow-left"></i></Link><form className="blockConnexion" method="post">
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
          className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Entrez votre e-mail" required />
      </div>

      <div>
        <label htmlFor="password">Mot de passe</label>
        <input type="password" className="form-control" id="password" name="password" aria-label="password" placeholder="Mot de passe" required />
      </div>

      <div>
        <input type="checkbox" name="agree-terms" aria-label="agree-terms" required />
        <label htmlFor="agree-terms">Se souvenir de moi</label>
      </div>

      <button type="submit" className="btn-connexion">Je me connecte</button>

    </form></>
    
  )
}

export default PageConnexion