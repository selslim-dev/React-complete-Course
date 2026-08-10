import { useState } from "react";
export default function ConfigureCounter({ onSet }) {
  const [enteredNumber, setEnteredNumber] = useState(0);

  const handleChange = function (event) {
    setEnteredNumber(+event.target.value);
  };

  const handleSetClick = function () {
    onSet(enteredNumber);
    setEnteredNumber(0);
  };

  return (
    <section id="configure-counter">
      <h2>Set Counter</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} />
      <button onClick={handleSetClick}>Set</button>
    </section>
  );
}
