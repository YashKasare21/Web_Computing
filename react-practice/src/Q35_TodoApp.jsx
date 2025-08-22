import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h3>To-Do List</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            <input type="checkbox" checked={t.completed} onChange={() => toggleComplete(i)} />
            <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>{t.text}</span>
            <button onClick={() => removeTask(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;
