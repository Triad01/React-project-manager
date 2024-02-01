import { useRef, Fragment } from "react";
import Input from "./input";
import Modal from "./Modal";

const NewProject = ({ onAddProject, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDdate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDdate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const data = {
      enteredTitle,
      enteredDescription,
      enteredDueDate,
    };

    onAddProject(data);
  };

  return (
    <Fragment>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl text-tone-700 my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">
          oops! Look like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a value for every input
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textArea />
          <Input type="date" ref={dueDdate} label="Due Date" />
        </div>
      </div>
    </Fragment>
  );
};
export default NewProject;
