import React from 'react'
import "./Categories.css"
import {Link} from 'react-router-dom'

function Categories() {

  const questions = "http://127.0.0.1:8000/api/questions";

  fetch(questions)
  .then((response) => response.json())
  .then((data) => {
    data.forEach(item => {
      console.log(item.reponse1)
    })
  })


  return (
  <>        
    <div className="icons">
      <Link className="back-arrow" to="/">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>

      <Link className="icon-user" to="/ModifProfil">
        <i className="fa-solid fa-user"></i>
      </Link>
    </div>

      <div className="blockCategories">
        <button className="btn-categories">Sciences</button>
        <button className="btn-categories">Français</button>
        <button className="btn-categories">Géographie</button>
        <button className="btn-categories">Sport</button>
      </div>
  </>
  );
}

export default Categories