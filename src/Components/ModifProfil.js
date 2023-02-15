import React from 'react'
import './ModifProfil.css'

function ModifProfil() {
  return (
    <><form className="blockModif">
      <div>
        <label htmlFor="pseudo">Pseudo</label>
        <input type="text" pattern="[a-zA-Z0-9]+"
          className="form-control" id="pseudo" name="pseudo" aria-label="pseudo" placeholder="Modifiez votre pseudo" required />
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
          className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Modifiez votre adresse mail" required />
      </div>

      <div>
        <label htmlFor="password">Mot de passe</label>
        <input type="password" className="form-control" id="password" name="password" aria-label="password" placeholder="Modifiez votre mot de passe" required />
      </div>

      <button type="submit" className="btn btn-primary">Confirmer</button>
    </form>
    
    <h3>Votre historique</h3>

  <div className="blockHistorique">

    <div className="score">
      <p>Catégorie : Géographie</p>
      <p>Score : 426</p>
    </div>

    <div className="score">
      <p>Catégorie : Sciences</p>
      <p>Score : 654</p>
    </div>

    <div className="score">
     <p>Catégories : Français</p>
     <p>Score : 345</p>
    </div>

    <div className="score">
      <p>Catégories : Sport</p> 
      <p>Score : 345</p>
    </div>
  </div>
    
    </>

    
  )
}

export default ModifProfil