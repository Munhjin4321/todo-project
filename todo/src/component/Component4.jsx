import { Component5 } from "./Component5";

export const Component4 = (props) => {
  console.log("component4", props);
  return <Component5 pizza4={props.pizza3} />;
};
