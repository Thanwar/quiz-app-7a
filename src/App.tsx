import React, { useState } from "react";
import { QuestionCard } from "./components/QuestionCard";
import { fetchQuestions, Difficulty, QuestionState } from "./API/Api";
import { GlobalStyle, Wrapper } from "./App.style";
import firebase from "./firebase";



type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {

    const messaging = firebase.messaging();
    messaging.requestPermission().then(()=>{
      return messaging.getToken();
    }).then((token)=>{
      console.log('token',token);
      
    })
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameover, setGameover] = useState(true);

  const Total_Questions = 10;

  const startQuiz = async () => {
    setLoading(true);
    setGameover(false);
    const newQuestions = await fetchQuestions(Total_Questions, Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const nextQuestion = async () => {
    const nextQuestion = number + 1;
    if (nextQuestion === Total_Questions) {
      setGameover(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameover) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  console.log(questions);

  return (
    <div>
      <GlobalStyle />
        <Wrapper>
        <h1>Quiz</h1>
        {gameover || userAnswers.length === Total_Questions ? (
          <button className="start" onClick={startQuiz}>
            {" "}
            START{" "}
          </button>
        ) : null}

        {!gameover ? <p>Score: {score}</p> : null}

        {loading ? <p>Loading ...</p> : null}
        {!loading && !gameover ? (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestion={Total_Questions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callbacks={checkAnswer}
          />
        ) : null}

        {!gameover &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== Total_Questions - 1 ? (
          <button className="start" onClick={nextQuestion}>
            {" "}
            NEXT{" "}
          </button>
        ) : null}
        </Wrapper>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      
    </div>
  );
}

export default App;
