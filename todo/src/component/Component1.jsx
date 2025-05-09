import { Component2 } from "./Component2";

export const Component1 = (props) => {
  console.log(props);
  return (
    <div>
      <Component2 pizza1={props.pizza} />
    </div>
  );
};
