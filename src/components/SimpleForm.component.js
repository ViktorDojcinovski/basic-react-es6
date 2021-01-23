import React from "react";

export default function SimpleForm(props) {
  return (
    <div>
      <input value={props.text} onChange={props.onChange} />
    </div>
  );
}
