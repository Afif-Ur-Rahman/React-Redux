import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../features/sliceReducer";
import PropTypes from "prop-types";

const AddTodo = ({ setAddTodo, input, setInput, newId, setNewId }) => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.length < 1) {
      return setIsError(true);
    }
    dispatch(addTodo(input));
    setInput("");
    setAddTodo(false);
  };

  const handleEditTodo = async (id) => {
    if (input.length < 1) {
      return setIsError(true);
    }
    dispatch(editTodo({ id, input }));
    setInput("");
    setNewId(null);
    setAddTodo(false);
  };

  return (
    <>
      <div className="container">
        <form>
          <h5 className="text-center">Add Todo</h5>
          <div className="textArea mb-3">
            <label htmlFor="text" className="form-label">
              Enter Text Here:
            </label>
            <textarea
              type="text"
              className="form-control"
              id="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setIsError(false);
              }}
            />
            {isError && (
              <span style={{ color: "red" }}>Todo cannot be Empty!</span>
            )}
          </div>
          <button
            type="submit"
            className="createBtn"
            onClick={newId ? () => handleEditTodo(newId) : handleAddTodo}
          >
            <span>{newId ? "Update" : "Create"} Todo</span>
          </button>
          <button
            className="cancelBtn"
            onClick={() => {
              setAddTodo(false);
              setNewId(null);
              setInput("");
            }}
          >
            <span>Cancel</span>
          </button>
        </form>
      </div>
    </>
  );
};

AddTodo.propTypes = {
  setAddTodo: PropTypes.func,
  input: PropTypes.string,
  setInput: PropTypes.func,
  setNewId: PropTypes.func,
  newId: PropTypes.string,
};

export default AddTodo;
