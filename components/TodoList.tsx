import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Buy milk', done: false },
    { id: 2, text: 'Walk the dog', done: false },
    { id: 3, text: 'Do homework', done: false },
  ]);

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleToggle(todo.id)}
          />
          <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;