import React from 'react'
import './ModifProfil.css'

function ModifProfil() {
  return (
    <>
    <form className="blockModif">

      <label htmlFor="pseudo">Modifier mon Pseudo</label>
      <input 
        type="text" 
        className="form-control" 
        id="pseudo" 
        name="pseudo" 
        aria-label="pseudo" 
        placeholder="Entrez votre nouveau pseudo" 
        required />

      <label htmlFor="email">Modifier mon e-mail</label>
      <input 
        type="email" 
        className="form-control" 
        id="email" 
        name="email" 
        aria-describedby="emailHelp" 
        placeholder="Entrez votre nouvelle adresse mail" 
        required />

      <label htmlFor="password">Modifier mon mot de passe</label>
      <input 
        type="password" 
        className="form-control" 
        id="password" 
        name="password" 
        aria-label="password" 
        placeholder="Entrez votre nouveau mot de passe" 
        required />
  
      <button type="submit" className="btn-confirmer">Confirmer les modifications</button>

    </form>

  <div className="blockHistorique">
    <h4>Votre historique :</h4>

    <div className="score">
      <p>Catégorie : Géographie</p>
      <p>Score : 20</p>
    </div>

    <div className="score">
      <p>Catégorie : Sciences</p>
      <p>Score : 15</p>
    </div>

    <div className="score">
     <p>Catégories : Français</p>
     <p>Score : 9</p>
    </div>

    <div className="score">
      <p>Catégories : Sport</p> 
      <p>Score : 13</p>
    </div>
  </div>
    
    </>

    
  )
}

export default ModifProfil