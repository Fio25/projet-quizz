import React, { useState } from 'react';
import './PageInscription.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

function PageInscription() {

    const pseudoRegex = /^[a-zA-Z0-9_-]{3,20}$/
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?!.*[\W_])(?!.*\s).{8,}$/;

    const [formData, setFormData] = useState({
      pseudo:"",
      email:"",
      password:"",
      confirmPassword:""
    })

    const [formErrors, setFormErrors] = useState({})

    const handleSubmitChange = (event) => {
      const {name, value} = event.target;
        setFormData({...formData, [name]: value})
    }

    //Soumission de l'entiereté du formulaire
    const handleSubmit = (e) => {
      e.preventDefault();
      
    const errors = {};
    if (!pseudoRegex.test(formData.pseudo)) {
      errors.pseudo = "Veuillez entrer un pseudo";
    }
    if (!emailRegex.test(formData.email)) {
      errors.email = "Veuillez entrer une adresse e-mail valide";
    }
    if (!passwordRegex.test(formData.password)) {
      errors.password = "Au moins 8 caractères dont au moins une majuscule et un chiffre";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    setFormErrors(errors);

    // Si des erreurs sont détectées, ne pas envoyer le formulaire
    if (Object.keys(errors).length > 0) {
      return;}
    setFormErrors(errors);
    
    //Lier les informations du form à la base de donnée
    axios.post("http://localhost:8000/api/users", {
      name : formData.pseudo,
      email: formData.email,
      password : formData.password
    })
    //Redirection sur la page connexion une fois inscrit
    .then(response => {
      window.location.assign("/PageConnexion");
    })
  };

  return (
    <>
      <div className="fleche">
        <Link className="back-arrow" to="/">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>

      <form className="formInscription" method="post">

        <label htmlFor="pseudo" className="pseudo">Pseudo</label>
        <input 
          type="text" 
          className='form-control'
    
          id="pseudo" 
          name="pseudo"
          value={formData.pseudo}
          onChange={handleSubmitChange}
          aria-label="pseudo" 
          placeholder="Entrez votre pseudo" 
          required/>
          {formErrors.pseudo && <span className="msgError">{formErrors.pseudo}</span>}
        
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
          {formErrors.email && <span className="msgError">{formErrors.email}</span>}
        
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
        
        <label htmlFor="confirmPassword">Confirmation du mot de passe</label>
        <input 
          type="password" 
          className="form-control" 
          id="confirmPassword" 
          name="confirmPassword" 
          value={formData.confirmPassword}
          onChange={handleSubmitChange}
          aria-label="confirmPassword" 
          placeholder="Confirme ton mot de passe" 
          required/>
          {formErrors.confirmPassword && <span className="msgError">{formErrors.confirmPassword}</span>}
        
        <button type="submit" className="btn-inscris" onClick={handleSubmit}>Je m'inscris</button>

      </form>
    </>
  )
}

export default PageInscription;