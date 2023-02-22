import React, { useEffect, useState } from "react";
import "./Reponse.css";
import { v4 as uuidv4 } from "uuid";

export default function Reponse({ datas }) {

  const [sortedResponse, setSortedResponse] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const rdmresult = [
      datas[currentQuestion].reponse2,
      datas[currentQuestion].reponse3,
      datas[currentQuestion].reponse4,
      datas[currentQuestion].reponse5,
      datas[currentQuestion].reponse6,
      datas[currentQuestion].reponse7,
      datas[currentQuestion].reponse8,
      datas[currentQuestion].reponse9,
      datas[currentQuestion].reponse10,
    ];
    const newSortResult = rdmresult
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .concat(datas[currentQuestion].reponse1)
      .sort(() => Math.random() - 0.5);
    setSortedResponse(newSortResult);
    setTimer(20);
  }, [currentQuestion, datas]);

  //TIMER
  const [timer, setTimer] = useState(20);
  const [timerId, setTimerId] = useState(null);
  const [stopTimer, setStopTimer] = useState(false);

  useEffect(() => {
    if (!stopTimer) {    
    if (timer > 0) {
      setTimerId(setTimeout(() => setTimer((prev) => prev - 1), 1000));
    }
    if (timer === 0) {
      clearTimeout(timerId);
      wrongAnswer()
    }

    return () => clearInterval(timerId);
  } }, [timer]);

  //MAUVAISE REPONSE
  function wrongAnswer() {
    setCurrentQuestion(currentQuestion + 1);
    console.log("t'es nul");
  }

  //BONNE REPONSE
  function goodAnswer() {
    setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
    console.log("t'es trop fort");
  }

  function returnBasic() {
    return (
      <div className="question-loca">

        <p className="timer"><i className="fa-regular fa-clock"></i> {timer} secondes</p>

        <div className="currentQuest">
          <p className="currentQuestionText">{datas[currentQuestion].question}</p>
        </div>

          {sortedResponse.map((row) => (
            <button className="btns-question" key={uuidv4()} onClick={row === datas[currentQuestion].reponse1 ? goodAnswer : wrongAnswer}>
              {row}
            </button>
          ))}

      </div>
    );
  }

  function returnEnd() {

    if (!stopTimer) setStopTimer(true)
    
    return (
      
        <p className="scoreFinal">Score : {score}/10</p>
      
    );
  }

  return currentQuestion < 10 ? returnBasic() : returnEnd();
}
