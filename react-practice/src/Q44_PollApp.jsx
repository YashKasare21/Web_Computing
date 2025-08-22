import React, { useState } from "react";

function PollApp() {
  const [votes, setVotes] = useState([0, 0, 0]);

  const vote = (index) => {
    const newVotes = [...votes];
    newVotes[index]++;
    setVotes(newVotes);
  };

  const reset = () => setVotes([0, 0, 0]);

  return (
    <div>
      <h3>Poll: Favorite Color?</h3>
      {["Red", "Blue", "Green"].map((opt, i) => (
        <div key={i}>
          <button onClick={() => vote(i)}>{opt}</button>
          Votes: {votes[i]}
        </div>
      ))}
      <button onClick={reset}>Reset Poll</button>
    </div>
  );
}
export default PollApp;
