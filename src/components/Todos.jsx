import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, removeAllTodo } from "../features/sliceReducer";
import AddTodo from "./AddTodo";
import { AddIcon, EditIcon, DeleteIcon } from "../assets/Icons.jsx";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [addTodo, setAddTodo] = useState(false);
  const [newId, setNewId] = useState(null);
  const [deleted, setDeleted] = useState(false);

  const handleDeleteTodo = (id) => {
    dispatch(id ? removeTodo(id) : removeAllTodo());
    setNewId(null);
  };

  return (
    <>
      {addTodo && (
        <AddTodo
          input={input}
          setInput={setInput}
          setAddTodo={setAddTodo}
          newId={newId}
          setNewId={setNewId}
        />
      )}
      <div className="container todos">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Content</th>
              <th scope="col">
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                  onClick={() => {
                    setAddTodo(true);
                  }}
                >
                  <div className="addIcon">
                    <AddIcon />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div onClick={() => setDeleted(true)}>
                  <DeleteIcon />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.text}</td>
                <td>
                  <div
                    className="editIcon"
                    onClick={() => {
                      setNewId(todo.id);
                      setAddTodo(true);
                      setInput(todo.text);
                    }}
                  >
                    <EditIcon />
                  </div>
                </td>
                <td>
                  <div
                    onClick={() => {
                      setDeleted(true);
                      setNewId(todo.id);
                    }}
                  >
                    <DeleteIcon />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deleted && (
          <div className="delete">
            <p>Are you Sure to Delete{!newId ? " All" : ""}?</p>
            <div>
              <button
                className="deleteBtn"
                onClick={() => {
                  handleDeleteTodo(newId);
                  setDeleted(false);
                }}
              >
                <span>Yes</span>
              </button>
              <button
                className="cancelBtn"
                onClick={() => {
                  setDeleted(false);
                  setNewId(null);
                }}
              >
                <span>No</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Todos;
