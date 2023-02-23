import React, { useState } from "react";
import "./PageConnexion.css";
import { Link } from "react-router-dom";
import axios from "axios";
  
function PageConnexion() {
  
  const storage = window.localStorage;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
   });

  const [formErrors, setFormErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
  // Vérifier si l'adresse e-mail et le mot de passe existent dans la base de données
  let response = await axios("http://localhost:8000/api/users");
  let users = response.data;
  let isValidUser = users.some(user => user.email === formData.email && user.password === formData.password);
  let isUserID = null

    users.map((item) => {
      if(item.email === formData.email) {
        isUserID = item.id }
      return null;
    })

      if (isValidUser) {
        window.location.assign("/");
  
      if (rememberMe) {
        storage.setItem("userID", isUserID)
        storage.setItem("isConnected", formData.email);
      }
    } 

      else {
        setFormErrors({ server: "E-mail ou Mot de passe incorrect" });
      }
  };
  
  const handleRememberMe = (event) => {
    setRememberMe(event.target.checked);
  };
  
return (
  <>
    <div className="fleche">
      <Link className="back-arrow" to="/">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
    </div>

    <form className="formConnexion" onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail :</label>
      <input
        className={`form-control ${formErrors.email ? 'saisie error' : 'saisie'}`}
        type="email"
        placeholder="Votre e-mail"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {formErrors.email && <span className="error-message">{formErrors.email}</span>}
  
      <label htmlFor="password">Mot de passe :</label>
      <input
        className={`form-control ${formErrors.password ? 'saisie error' : 'saisie'}`}
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Votre mot de passe"
      />
      {formErrors.server && <span className="error-message">{formErrors.server}</span>}
      {formErrors.password && <span className="error-message">{formErrors.password}</span>}

      <div className="conteneurCheck">
        <input type="checkbox" className="checkbox" name="rememberMe" aria-label="rememberMe" checked={rememberMe} onChange={handleRememberMe} />
        <label className="labelCheckbox">Rester connecté</label>
      </div>
  
  
          <input className="btn-connexion" type="submit" value="Se connecter" />

        </form>
      </>
    );
  }
  
export default PageConnexion