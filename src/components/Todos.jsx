import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/sliceReducer";
import AddTodo from "./AddTodo";
import AddIcon from "../assets/Add.svg";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [addTodo, setAddTodo] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {addTodo && <AddTodo setAddTodo={setAddTodo} />}
      <div className="container">
        <h4 className="text-center">Todos</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Content</th>
              <th scope="col">
                <AddIcon onClick={() => setAddTodo(true)} />
              </th>
              <th scope="col">&#x1F5D1;</th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((todo, index) => {
              <tr key={todo.id}>
                <th>{index + 1}</th>
                <td>{todo.text}</td>
                <td>
                  <div onClick={() => dispatch(editTodo(todo.id))}>
                    &#x270E;
                  </div>
                </td>
                <td>
                  <div onClick={() => dispatch(removeTodo(todo.id))}>
                    &#x1F5D1;
                  </div>
                </td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todos;
