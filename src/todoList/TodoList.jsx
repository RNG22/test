import { useState } from "react";

const TodoList=()=> {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div >
      <h2>Todo List</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
        {todos.map((todo, i) => (
          <li key={i} className="d-flex justify-content-between align-items-center ">
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "none" }}
              onClick={() => toggleTodo(i)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList