import { Component11 } from "./Component11";

export const Component10 = (props) => {
  console.log("Component10", props);

  return <Component11 pizza10={props.pizza9} />;
};
