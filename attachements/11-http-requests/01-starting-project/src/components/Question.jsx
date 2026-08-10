import { QuestionTimer } from "./QuestionTimer";
import { Answers } from "./Answers";
import { useState } from "react";
import QUESTIONS from "../questions";

const ANSWER_REVEAL_DELAY = 1000; // time before showing correct/wrong highlight
const CORRECT_ANSWER_DELAY = 2000; // move on quickly if they got it right
const WRONG_ANSWER_DELAY = 4000; // give extra time to see the right answer

export const Question = function ({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const handleSelectAnswer = function (selectedAnswer) {
    setAnswer({
      selectedAnswer,
      isCorrect: null,
    });

    setTimeout(() => {
      const isCorrect = QUESTIONS[index].answers[0] === selectedAnswer;

      setAnswer({
        selectedAnswer,
        isCorrect,
      });

      const nextQuestionDelay = isCorrect
        ? CORRECT_ANSWER_DELAY
        : WRONG_ANSWER_DELAY;

      setTimeout(() => {
        onSelectAnswer(selectedAnswer);
      }, nextQuestionDelay);
    }, ANSWER_REVEAL_DELAY);
  };

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />

      <h2>{QUESTIONS[index].text}</h2>

      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};
