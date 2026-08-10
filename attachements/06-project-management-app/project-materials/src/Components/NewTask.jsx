import { useRef, useState } from "react";
import { Modal } from "./Modal";

export const NewTask = function ({ onAdding }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal = useRef();

  const handleChange = function (e) {
    setEnteredTask(e.target.value);
  };

  const handleClick = function () {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAdding(enteredTask);
    setEnteredTask("");
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please enter a valid task before adding it.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
};
