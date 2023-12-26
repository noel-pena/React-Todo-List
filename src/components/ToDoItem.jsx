import React, { useState } from "react";

function ToDoItem(props) {
  const [text, lineText] = useState(false);

  function checkedItem() {
    lineText(!text);
  }

  return (
    <li
      onClick={checkedItem}
      style={text ? { textDecoration: "line-through" } : null}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
