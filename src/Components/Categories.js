import React, { useEffect, useState } from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

function Categories() {

  const questions = "http://127.0.0.1:8000/api/questions";
  
  const [questionsData, setQuestionsData] = useState({})
  
  // const [quizzData, setQuizzData] = useState({id:1, id: 2, id:3, id:4, id:5})

  useEffect(() => {
    fetch(questions)
    .then((response) => response.json())
    .then((data) => {
        setQuestionsData(data)
        // setQuizzData(data)
        setIsLoading(false);
    });
  });

  //Page de chargement le temps d'attendre l'API
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <div>
        <div id="generated">Loading...</div>
      </div>
    );
  }

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

      <div>
        {questionsData.map(question => (
          <p key={question.id}>{question.question}</p>
        ))}
      </div>

      <div className="blockCategories">

          {/* <Link to="/Quizz/1" id={"Science"}>Science</Link>
          <Link to="/Quizz/1" id={"Vélo"}>SCience</Link> */}

        <Link className="btn-categories">Sciences</Link>
        <Link className="btn-categories">Français</Link>
        <Link className="btn-categories">Géographie</Link>
        <Link className="btn-categories">Sport</Link>
      </div>

    </>
  );
}

export default Categories;
