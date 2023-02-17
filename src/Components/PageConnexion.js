import React, {useState} from 'react'
import './PageConnexion.css'
import {Link} from 'react-router-dom'

function PageConnexion() {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?!.*[\W_])(?!.*\s).{8,}$/;
  
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })

  const [formErrors, setFormErrors] = useState({})

  const handleSubmitChange = (event) => {
    const {name, value} = event.target;
      setFormData({...formData, [name]: value})
    }

  const handleClick = (e) => {
    e.preventDefault();

    const errors = {};
    if (!emailRegex.test(formData.email) || !passwordRegex.test(formData.password)) {
      errors.password="email ou mdp incorrecte"
    }
    setFormErrors(errors);

    // Si des erreurs sont détectées, ne pas envoyer le formulaire
    if (Object.keys(errors).length > 0) {
      return;}

    setFormErrors(errors);

    window.location.assign("/Categories");
  };

  return (
    <>
      <div className="fleche">
        <Link className="back-arrow" to="/">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      
      <form className="formConnexion" method="post">

        <label htmlFor="email">E-mail</label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleSubmitChange}
          aria-describedby="emailHelp" 
          placeholder="Entrez votre e-mail" 
          required/>

    
        <label htmlFor="password">Mot de passe</label>
        <input 
          type="password" 
          className="form-control" 
          id="password" 
          name="password"
          value={formData.password}
          onChange={handleSubmitChange} 
          aria-label="password" 
          placeholder="Mot de passe" 
          required/>
          {formErrors.password && <span className="msgError">{formErrors.password}</span>}
  
        <input 
          type="checkbox" 
          name="agree-terms" 
          aria-label="agree-terms" 
          required/>
        <label className="checkbox">Se souvenir de moi</label>

        <button type="submit" className="btn-connexion" onClick={handleClick}>Je me connecte</button>

      </form>
    </>
  )
}

export default PageConnexion