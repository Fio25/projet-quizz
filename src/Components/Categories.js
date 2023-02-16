import React from "react";
import { Link } from "react-router-dom";
import './Categories.css'

function Categories() {
  return (
    <>
      <div className="btn-user">
        <Link className="iconUser" to="/ModifProfil">
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

export default Categories;
