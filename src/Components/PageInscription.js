import React from 'react'
import './PageInscription.css'
import {Link} from 'react-router-dom'
// import { useRef, useState } from 'react';

function PageInscription() {

    // const emailRegex = /^\S+@\S+.\S+$/;
    // const passwordRegex = /^(?=.[A-Z])(?=.[a-z])(?=.*\d).{8,}$/;
    // const errors = {};
    // if (!formData.name) {
    //   errors.name = 'Veuillez entrer un pseudo.';
    // }
    // if (!emailRegex.test(formData.email)) {
    //   errors.email = 'Veuillez entrer une adresse e-mail valide.';
    // }
    // if (!passwordRegex.test(formData.password)) {
    //   errors.password = 'Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre et un chiffre.';
    // }
    // if (formData.password !== formData.confirmPassword) {
    //   errors.confirmPassword = 'Les mots de passe ne correspondent pas.';
    // }
    // setFormErrors(errors);

    // // Si des erreurs sont détectées, ne pas envoyer le formulaire
    // if (Object.keys(errors).length > 0) {
    //   return;
    // }



    
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [passwordsMatch, setPasswordsMatch] = useState(false);

  // const passwordRef = useRef(null);
  // const confirmPasswordRef = useRef(null);

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleConfirmPasswordChange = (event) => {
  //   setConfirmPassword(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (password === confirmPassword) {
  //     setPasswordsMatch(true);
  //   } else {
  //     setPasswordsMatch(false);
  //     passwordRef.current.focus();
  //     confirmPasswordRef.current.value ="";
  //   }
  // };


  return (
    <>
      <Link className="back-arrow" to="/">
        <i class="fa-solid fa-arrow-left"></i>
      </Link>

      <form className="blockInscription" method="post">

        <label htmlFor="pseudo">Pseudo</label>
        <input 
          type="text" 
          className="form-control" 
          id="pseudo" 
          name="pseudo" 
          aria-label="pseudo" 
          placeholder="Entrez votre pseudo" 
          required/>
        
        <label htmlFor="email">E-mail</label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          name="email" 
          aria-describedby="emailHelp" 
          placeholder="Entrez votre e-mail" 
          required/>
        
        <label htmlFor="password">Mot de passe</label>
        <input 
          type="password" 
          className="form-control" 
          id="password" 
          name="password" 
          aria-label="password" 
          placeholder="Mot de passe" 
          required/>
        
        <label htmlFor="passwordc">Confirmation du mot de passe</label>
        <input 
          type="password" 
          className="form-control" 
          id="passwordc" 
          name="passwordc" 
          aria-label="confirm-password" 
          placeholder="Confirme ton mot de passe" 
          required/>
        
        <label>
        <input 
          type="checkbox" 
          name="agree-terms" 
          aria-label="agree-terms" 
          required/>
          J'accepte les conditions générales d'utilisation 
        </label>

        <button type="submit" className="btn-inscris">Je m'inscris</button>

      </form>
    </>
  )
}

export default PageInscription