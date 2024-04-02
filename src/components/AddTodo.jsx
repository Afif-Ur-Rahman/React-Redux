import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/sliceReducer";
import PropTypes from 'prop-types'

const AddTodo = ( { setAddTodo } ) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleAddTodo}>
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
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button type="submit" className="createBtn">
            <span>Create Todo</span>
          </button>
          <button className="cancelBtn" onClick={() => setAddTodo(false)}>
            <span>Cancel</span>
          </button>
        </form>
      </div>
    </>
  );
};

AddTodo.propTypes = {
    setAddTodo: PropTypes.func.isRequired,
  };

export default AddTodo;
