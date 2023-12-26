import React, {useState} from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, addInputText] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newValue = event.target.value
    addInputText(newValue);
  }

  function addItem(){
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    addInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
          <input onChange={handleChange} value={inputText} type="text" />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
      </div>
      <div>
        <ul>
          {items.map(item => (
              <ToDoItem text={item} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
