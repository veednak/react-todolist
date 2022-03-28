import { useState, useEffect, useRef } from "react";

import { ItoDo } from "../types/data";
import { TodoList } from "../components/TodoList";
import { title } from "process";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [search, searchValue] = useState("");
  const [todos, setTodos] = useState<ItoDo[]>([]);

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };
  const searchTodo = () => {
    if (search) {
    }
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") addTodo();
  };
  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number, title: string): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignContent: "space-around",
          }}
        >
          <div>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={addTodo}>Add</button>
          </div>
          <input
            value={search}
            onChange={(e) => searchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <TodoList
            items={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </div>
      </div>
    </div>
  );
};

export { App };
