import React, { useState } from "react";

function ToDoItem(props) {
  const [isLineThrough, setLineThrough] = useState(false);

  function handleClick() {
    setLineThrough(preValue => {
      return !preValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isLineThrough ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}

export default ToDoItem;
