export const Task = ({ task, deleteTask, toggleCheckBox }) => {
  const handleToggleCheckBox = () => {
    toggleCheckBox(task.id);
  };
  // console.log(props);
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleToggleCheckBox}
      />
      <div className={styles.check}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <p style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
        {task.taskName}
      </p>
      <button onClick={() => deleteTask(task.id)}>delete</button>
    </div>
  );
};
