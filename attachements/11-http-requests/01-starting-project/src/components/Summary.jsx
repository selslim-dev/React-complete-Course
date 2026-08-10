import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export const Summary = function ({ userAnswers }) {
  const skippedAnswersCount = userAnswers.filter(
    (answer) => answer === null,
  ).length;

  const correctAnswersCount = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0],
  ).length;

  const wrongAnswersCount =
    userAnswers.length - skippedAnswersCount - correctAnswersCount;

  const skippedPercentage = Math.round(
    (skippedAnswersCount / userAnswers.length) * 100,
  );
  const correctPercentage = Math.round(
    (correctAnswersCount / userAnswers.length) * 100,
  );
  const wrongPercentage = Math.round(
    (wrongAnswersCount / userAnswers.length) * 100,
  );

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Complete" />
      <h2>Quiz Finished!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
