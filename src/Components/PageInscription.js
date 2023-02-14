import React from 'react'

function PageInscription() {

  return (
    <>
      <form method="post" novalidate>

        <label for="pseudo">Pseudo</label>
        <input type="text" class="form-control" id="pseudo" name="pseudo" aria-label="pseudo" placeholder="Entrez votre pseudo" required />

        <div class="form-group">
          <label for="birthday">Date de naissance</label>

          <div class="row">

          <div class="col-4">
            <select class="form-control" name="birthday[day]" id="birthday" require>
              <option value="null" disabled selected>Jour</option>
            </select>
          </div>

          <div class="col-4">
            <select class="form-control" name="birthday[month]" required>
              <option value="null" disabled selected>Mois</option>
            </select>
          </div>

          <div class="col-4">
            <select class="form-control" name="birthday[year]" required>
              <option value="null" disabled selected>Années</option>
            </select>
          </div>
          </div>
        </div>
        
        <div>
        <label for="email">E-mail</label>
        <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Entrez votre e-mail" required/>
        </div>
        
        <div>
        <label for="password">Mot de passe</label>
        <input type="password" class="form-control" id="password" name="password" aria-label="password" placeholder="Mot de passe" required/>
        </div>
        
        <div>
        <label for="confirm-password">Confirmation du mot de passe</label>
        <input type="password" class="form-control" id="confirm-password" name="confirm-password" aria-label="confirm-password" placeholder="Confirme ton mot de passe" required/>
        </div>
        
        <div>
        <label>J'accepte les conditions générales d'utilisation</label>
        <input type="checkbox" name="agree-terms" aria-label="agree-terms" required/>
        </div>

        <button type="submit" class="btn btn-primary">Je m'inscris</button>

      </form>
    </>
  )
}

export default PageInscription