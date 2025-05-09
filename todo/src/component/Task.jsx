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

      <p style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
        {task.taskName}
      </p>
      <button onClick={() => deleteTask(task.id)}>delete</button>
    </div>
  );
};
