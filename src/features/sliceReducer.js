import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
        state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const {id, newText} = action.payload;
      const edit = state.todos.filter((todo) => todo.id === id);
      if (edit) {
        edit.text = newText;
      }
    },
  },
});

export const {addTodo, removeTodo, editTodo} = todoSlice.actions;
export default todoSlice.reducer;
