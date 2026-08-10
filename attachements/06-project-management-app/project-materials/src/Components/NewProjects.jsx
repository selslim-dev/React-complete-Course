import { useRef } from "react";
import { Input } from "./Input";
import { Modal } from "./Modal";

export const NewProject = function ({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = function () {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // Show the error modal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-600 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you enter a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={() => {
                console.log("Cancel clicked, onCancel is:", onCancel);
                onCancel();
              }}
              className="text-stone-800 hover:text-stone-950 "
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 bg-stone-800 text-stone-50 
              rounded-md hover:bg-stone-950 "
              onClick={handleSave}
            >
              save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title"></Input>
          <Input ref={description} label="Description" textarea></Input>
          <Input type="date" ref={dueDate} label="Due Date"></Input>
        </div>
      </div>
    </>
  );
};
