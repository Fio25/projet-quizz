import React from 'react'

function PageConnexion() {
  return (
    <div>
        <form method="post">
            <label htmlFor="e-mail">E-mail</label>
            <input type="e-mail" />

            <label htmlFor="password">Mot de passe</label>
            <input type="password" />
        </form>
    </div>
  )
}

export default PageConnexion