import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="fleche">
        <Link className="back-arrow" to="/">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>


      <h2 className="categ-title">Catégories</h2>

      <div className="blockCategories">
        <Link className="btn-categories" to="/Quizz/1">Géographie</Link>
        <Link className="btn-categories" to="/Quizz/2">Français</Link>
        <Link className="btn-categories" to="/Quizz/3">Sciences</Link>
        <Link className="btn-categories" to="/Quizz/4">Sport</Link> 
      </div>

    </>
  );
}

export default Categories;
