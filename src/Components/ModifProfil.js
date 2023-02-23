import React from 'react'
import './ModifProfil.css'
import {Link} from 'react-router-dom'

function ModifProfil() {
  return (
    <>
      <div className="fleche">
        <Link className="back-arrow" to="/">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
          
      <form className="formModif">

        <label htmlFor="pseudo">Modifier mon Pseudo</label>
        <input 
          type="text" 
          className="form-control" 
          id="pseudo" 
          name="pseudo" 
          aria-label="pseudo" 
          placeholder="Entrez votre nouveau pseudo" 
        />

        <label htmlFor="email">Modifier mon e-mail</label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          name="email" 
          aria-describedby="emailHelp" 
          placeholder="Entrez votre nouvelle adresse mail" 
        />

        <label htmlFor="password">Modifier mon mot de passe</label>
        <input 
          type="password" 
          className="form-control" 
          id="password" 
          name="password" 
          aria-label="password" 
          placeholder="Entrez votre nouveau mot de passe" 
        />
      
        <button type="submit" className="btn-confirmer">Confirmer les modifications</button>

      </form>

      <div className="blockHistorique">
        <h4>Mon historique :</h4>

        <div className="score">
          <p>Catégorie : Géographie</p>
          <p>Score : 10/10</p>
        </div>

        <div className="score">
          <p>Catégorie : Sciences</p>
          <p>Score : 7/10</p>
        </div>

        <div className="score">
          <p>Catégories : Français</p>
          <p>Score : 4/10</p>
        </div>

        <div className="score">
          <p>Catégories : Sport</p> 
          <p>Score : 8/10</p>
        </div>

      </div>
        
    </>
  )
}

export default ModifProfil;