import React, { useState } from "react";
import questions from "./data";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and Answer about login</h3>
        <section className="info"></section>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </main>
  );
}

export default App;
