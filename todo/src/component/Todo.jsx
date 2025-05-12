import { useState } from "react";
import { Task } from "./Task";
import styles from "./todo.module.css";
// import { Filter } from "./Filter";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  // const [filter, setFilter] = useState("all");

  const onChangeText = (event) => {
    const typedText = event.target.value;
    setText(typedText);
  };

  const addTask = () => {
    const newTask = {
      id: new Date(),
      isCompleted: false,
      taskName: text,
    };

    setTasks([...tasks, newTask]);
    setText("");
  };
  const deleteTask = (id) => {
    const updateTask = tasks.filter((el) => el.id !== id);
    setTasks(updateTask);
  };

  const toggleCheckBox = (id) => {
    const toggledTask = tasks.map((addTask) =>
      addTask.id === id
        ? { ...addTask, isCompleted: !addTask.isCompleted }
        : addTask
    );
    setTasks(toggledTask);
  };


  // const filteredTask = tasks.filter((task) => {
  //   if (filter === "active" && task.isCompleted === true) {
  //     return task;
  //   }
  //   if (filter === "completed" && task.isCompleted === true) {
  //     return task;
  //   }
  //   if (filter === "all") {
  //     return task;
  //   }
  // });


  return (
    <div className={styles.body}>
      <h1>To-Do list</h1>
      <div className={styles.form}>
        <input className={styles.form}
          onChange={onChangeText}
          value={text}
          placeholder="Add a new task"
        ></input>
        <button className={styles.formButton} onClick={addTask}>Add</button>
      </div>
      <div className={styles.check}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      {/* <Filter setFilter={setFilter} /> */}
      {/* -------- */}
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            deleteTask={deleteTask}
            toggleCheckBox={toggleCheckBox}
          />
        );
      })}
    </div>
  );
};
