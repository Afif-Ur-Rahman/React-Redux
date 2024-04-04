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
      state.todos.unshift(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    editTodo: (state, action) => {
      const { id, input } = action.payload;
      const updateTodo = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: input } : todo
      );
      state.todos = updateTodo;
    },
    clearTodo: (state) => {
      state.todos = []
    }
  },
});

export const { addTodo, removeTodo, editTodo, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
