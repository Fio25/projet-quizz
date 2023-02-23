import React, { useEffect, useState } from "react";
import "./Reponse.css";
import { v4 as uuidv4 } from "uuid";
import {Link} from 'react-router-dom';

export default function Reponse({ datas }) {

  const [sortedResponse, setSortedResponse] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);
  const [datasQuestion, setDatasQuestion] = useState(datas)

  const [count, setCount] = useState(20);
  const [stopTimer, setStopTimer] = useState(false);

  useEffect(() => {
    const rdmresult = [
      datasQuestion[currentQuestion].reponse2,
      datasQuestion[currentQuestion].reponse3,
      datasQuestion[currentQuestion].reponse4,
      datasQuestion[currentQuestion].reponse5,
      datasQuestion[currentQuestion].reponse6,
      datasQuestion[currentQuestion].reponse7,
      datasQuestion[currentQuestion].reponse8,
      datasQuestion[currentQuestion].reponse9,
      datasQuestion[currentQuestion].reponse10,
    ];
    const newSortResult = rdmresult
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .concat(datas[currentQuestion].reponse1)
      .sort(() => Math.random() - 0.5);
    setSortedResponse(newSortResult);
    setCount(20);
  }, [currentQuestion, datasQuestion]);

  //TIMER
  useEffect(() => {
    const timer = setInterval(() => {
      if (!stopTimer) {
      if (count > 0) {
        setCount(count - 1);
      } else if (count === 0) {
        wrongAnswer();
      }
    }
    }, 1000);
    return () => clearInterval(timer);
  });

  //MAUVAISE REPONSE
  function wrongAnswer() {
    setCurrentQuestion(currentQuestion + 1);
  }

  //BONNE REPONSE
  function goodAnswer() {
    setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
  }

  //RESTART
  function restart() {
    setDatasQuestion(datasQuestion.sort(() => Math.random() - 0.5))
    setCurrentQuestion(sortedResponse.sort(() => Math.random() - 0.5));
    setCount(20)
    setScore(0)
    setCurrentQuestion(0)
    setStopTimer(false)
    console.log(sortedResponse);
  }

  function returnBasic() {
    return (
      <>
        <div className="fleche">
          <Link className="back-arrow" to="/Categories">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </div>

        <div className="block-question">

          <div className="question-loca">
            <p className="timer"><i className="fa-regular fa-clock"></i> {count} secondes</p>
          </div>

          <div className="currentQuest">
            <p className="currentQuestionText">{datas[currentQuestion].question}</p>
          </div>

          {sortedResponse.map((row) => (
            <button className="btn-question" key={uuidv4()} onClick={row === datas[currentQuestion].reponse1 ? goodAnswer : wrongAnswer}>
              {row}
            </button>
          ))}

        </div>
      </>
        
    );
  }

  function returnEnd() {

    if (!stopTimer) setStopTimer(true);

    return (
      <>
        <div className="fleche">
          <Link className="back-arrow" to="/">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </div>
      
        <div className="end-animation">
          {score >= 5 ? 
          <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_ftxa7lsy.json"  background="transparent" speed="1" loop autoplay></lottie-player>  
          : 
          <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_ccxfskpm.json"  background="transparent" speed="1" loop autoplay></lottie-player>
          }
        </div>

        <div className="text-anim">
          {score >= 5 ? 
            <p className="scoreFinal cassou-shiba">Cassou le shiba est content tu as eu plus de 5 !</p>
          : 
            <p className="scoreFinal cassou-shiba">Cassou le shiba est très triste tu as eu moins de 5 !</p>
          }
        </div>


        <p className="scoreFinal">Score : {score}/10</p>
        
        <div className="container-btn">
          <button onClick={restart} className="btn-retourCateg ">Rejouer</button>
          <Link className="btn-retourCateg last-categ" to="/Categories">Catégories</Link>
        </div>
     </>
    );
  }

  return currentQuestion < 10 ? returnBasic() : returnEnd();
}

