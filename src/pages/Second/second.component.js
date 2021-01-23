import React, { useState, useEffect } from "react";

import addNewProp from "../../hocs/simple.hoc";

const Second = (props) => {
  const [todos, setTodos] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((todos) => setTodos(todos));
    return () => {
      setMounted(false);
    };
  }, [setTodos]);

  return (
    <>
      <div className="someclass">Welcome Second page!</div>
      <div>
        <h3>List of my todos:</h3>
        <p>{props.newProp}</p>
        <ul>
          {todos &&
            todos.map((todo) => {
              return <li>{todo.title}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

export default addNewProp(Second);
