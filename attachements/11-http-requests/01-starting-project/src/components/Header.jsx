import quizLogo from "../assets/quiz-logo.png";
const imgDesc = "quiz logo";
export const Header = function () {
  return (
    <header>
      <img src={quizLogo} alt={imgDesc} />
      <h1>React Quiz</h1>
    </header>
  );
};
