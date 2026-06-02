import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  
  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks,{ text: input, completed: false }
    ]);
    setInput("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };


  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed =
      !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    const newText = prompt(
      "Edit your task:",
      tasks[index].text
    );

    if (newText !== null && newText.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = newText;
      setTasks(updatedTasks);
    }
  };
  return (
    <div className="container">
      <h1>To-do App</h1>
      <div className="input-section">
        <input type="text" placeholder="Enter your Task" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="add-btn" onClick={addTask}> Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((item, index) => (
          <div className={`task-card ${
              item.completed ? "done" : ""}`}
            key={index} ><span>{item.text}</span>
            <div>
              <button className="done-btn" onClick={() => toggleDone(index)}>✔</button>
              <button className="edit-btn" onClick={() => editTask(index)}>Edit</button>
              <button className="delete-btn"onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;

