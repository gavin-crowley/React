import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list"></ul>
      </div>
    </>
  );
};

export default TodoList;
