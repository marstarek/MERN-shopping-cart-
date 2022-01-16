import React from "react";

const Input = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        required
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
