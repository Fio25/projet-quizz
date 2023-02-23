
  import React, { useState } from "react";
  import "./PageConnexion.css";
  import { Link } from "react-router-dom";
  import axios from "axios";
  
  export default function PageConnexion() {
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
          if(item.email === formData.email){
            isUserID = item.id
          }
          return null;
      })
  
      if (isValidUser) {
        window.location.assign("/Categories");
  
        if (rememberMe) {
          storage.setItem("userID", isUserID)
          storage.setItem("isConnected", formData.email);
        }
      } else {
        setFormErrors({ server: "L'adresse e-mail ou le mot de passe est incorrect." });
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
          <label htmlFor="email">Email :</label>
          <input
            className={formErrors.email ? 'saisie error' : 'saisie'}
            type="email"
            placeholder="ex: email@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {formErrors.email && <span className="error-message">{formErrors.email}</span>}
  
          <label htmlFor="password">Mot de passe :</label>
          <input
            className={formErrors.password ? 'saisie error' : 'saisie'}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {formErrors.password && <span className="error-message">{formErrors.password}</span>}
  
          <label className="saveConnexion">
            <input type="checkbox" className="checkbox" name="rememberMe" aria-label="rememberMe" checked={rememberMe} onChange={handleRememberMe} />
            Rester connecté
          </label>
  
          {formErrors.server && <span className="error-message">{formErrors.server}</span>}
  
          <input className="btn-connexion" type="submit" value="Se connecter" />
        </form>
      </>
    );
  }