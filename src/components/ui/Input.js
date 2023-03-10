import React from "react";

const Input = React.forwardRef(({ input }, ref) => {
  return <input ref={ref} {...input} />;
});
export default Input;
