import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import { Question } from "./Question";
import { Summary } from "./Summary";

export const Quiz = function () {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionsIndex = userAnswers.length;
  const quizIsFinished = activeQuestionsIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer,
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizIsFinished) {
    return <Summary userAnswers={userAnswers} />;
  }

  const question = QUESTIONS[activeQuestionsIndex];

  return (
    <div id="quiz">
      <Question
        key={activeQuestionsIndex}
        index={activeQuestionsIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};
