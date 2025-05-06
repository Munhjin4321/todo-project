import { useState } from "react";
import { Task } from "./Task";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const onChangeText = (event) => {
    const typedText = event.target.value;
    setText(typedText);
  };

  const addTask = () => {
    const updatedTasks = [...tasks, text];

    setTasks(updatedTasks);
    setText("");
  };

  return (
    <div>
      <h1>To-Do list</h1>
      <input
        onChange={onChangeText}
        value={text}
        placeholder="Add a new task"
      ></input>
      <button onClick={addTask}>Add</button>
      <div style={{ display: "flex", gap: "30", paddingTop: "10" }}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      {/* -------- */}
      {tasks.map((text, index) => {
        return <Task key={index} text={text} />;
      })}
    </div>
  );
};
