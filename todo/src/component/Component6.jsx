import { Component7 } from "./Component7";

export const Component6 = (props) => {
  console.log("Component6", props);
  return <Component7 pizza6={props.pizza5} />;
};
