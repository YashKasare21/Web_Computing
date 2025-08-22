import React, { useState } from "react";

function QuizApp() {
  const questions = [
    { q: "2+2?", options: ["3","4","5"], ans: "4" },
    { q: "Capital of India?", options: ["Mumbai","Delhi","Kolkata"], ans: "Delhi" }
  ];
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (option) => {
    if (option === questions[index].ans) setScore(score + 1);
    setIndex(index + 1);
  };

  return (
    <div>
      {index < questions.length ? (
        <div>
          <h3>{questions[index].q}</h3>
          {questions[index].options.map((o,i) => (
            <button key={i} onClick={() => checkAnswer(o)}>{o}</button>
          ))}
        </div>
      ) : (
        <h3>Your Score: {score}/{questions.length}</h3>
      )}
    </div>
  );
}
export default QuizApp;
