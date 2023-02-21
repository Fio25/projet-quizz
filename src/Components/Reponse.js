import React, { useEffect, useState } from "react";
import "./Reponse.css";
import { v4 as uuidv4 } from "uuid";

export default function Reponse({ datas }) {
  const [sortedResponse, setSortedResponse] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
  }, [currentQuestion, datas]);

  function wrongAnswer() {
    setCurrentQuestion(currentQuestion + 1);
    console.log("t'es nul");
  }

  function goodAnswer() {
    setCurrentQuestion(currentQuestion + 1);
    console.log("t'es trop fort");
  }

  function returnBasic() {
    return (
      <>
        <div className="question-block">
          <div className="currentQuest">
            <p className="currentQuestionText">
              {datas[currentQuestion].question}
            </p>
          </div>

          <div>
            {sortedResponse.map((row) => (
              <button
                className="btns-question"
                key={uuidv4()}
                onClick={
                  row === datas[currentQuestion].reponse1
                    ? goodAnswer
                    : wrongAnswer
                }
              >
                {row}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  }

  function returnEnd() {
    return (
      <div>
        <p>gg t'as fini</p>
      </div>
    );
  }
  return currentQuestion < 10 ? returnBasic() : returnEnd();
}
