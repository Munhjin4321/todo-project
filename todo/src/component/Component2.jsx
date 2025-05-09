import { Component3 } from "./component3";

export const Component2 = (props) => {
  console.log("component2", props);
  return (
    <div>
      <Component3 pizza2={props.pizza1} />
    </div>
  );
};
