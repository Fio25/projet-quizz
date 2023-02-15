import React from 'react'
import './PageInscription.css'
import {Link} from 'react-router-dom'
// const form = document.querySelector("form");
// const password = document.querySelector("#password")
// const passwordc = document.querySelector("#passwordc")

function PageInscription() {

  return (
    <>
      <Link className="back-arrow" to="/"><i class="fa-solid fa-arrow-left"></i></Link>

      <form className="blockInscription" method="post" noValidate>

        <label htmlFor="pseudo">Pseudo</label>
        <input type="text" pattern="[a-zA-Z0-9]+"
         className="form-control" id="pseudo" name="pseudo" aria-label="pseudo" placeholder="Entrez votre pseudo" required />
        
        <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Entrez votre e-mail" required/>
        </div>
        
        <div>
        <label htmlFor="password">Mot de passe</label>
        <input type="password" className="form-control" id="password" name="password" aria-label="password" placeholder="Mot de passe" required/>
        </div>
        
        <div>
        <label htmlFor="passwordc">Confirmation du mot de passe</label>
        <input type="password" className="form-control" id="passwordc" name="passwordc" aria-label="confirm-password" placeholder="Confirme ton mot de passe" required/>
        </div>
        
        <div>
        <label>
        <input type="checkbox" name="agree-terms" aria-label="agree-terms" required/>
          J'accepte les conditions générales d'utilisation </label>
        </div>

        <button type="submit" className="btn-inscri">Je m'inscris</button>

      </form>
    </>
  )
}

// VERIFICATION DU MDP
// form.addEventListener("submit", function(e) {
//   if (password.value !== passwordc.value) {
//       alert("Les mots de passe ne correspondent pas");
//       e.preventDefault();
//   }
// });

export default PageInscription