import React from "react";
import { Wrapper, ButtonWrapper } from "./QuestionCard.style";

type Props = {
  question: string;
  answers: string[];
  callbacks: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestion: number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callbacks,
  userAnswer,
  questionNumber,
  totalQuestion,
}) => {
  return (
    <div>
      <Wrapper>
        <p>
          Question: {questionNumber} / {totalQuestion}{" "}
        </p>

        <p dangerouslySetInnerHTML={{ __html: question }} />

        <div>
          {answers.map((answer) => (
            <ButtonWrapper
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
            >
              <button disabled={userAnswer} value={answer} onClick={callbacks}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </ButtonWrapper>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
