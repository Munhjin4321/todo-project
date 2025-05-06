export const Task = (props) => {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      <input type="checkbox" />

      <p>{props.text}</p>
    </div>
  );
};
