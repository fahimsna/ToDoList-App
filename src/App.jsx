import { useState } from "react";
import "./App.css";

function App() {
  let [todolist, setTodolist] = useState([]);
  let saveToDoList = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value.trim();
    if (todolist.includes(toname)) {
      alert("Name already Exists...");
    } else {
      let finalTodolist = [...todolist, toname];
      setTodolist(finalTodolist);
      toname = "";
    }
  };
  let list = todolist.map((value, index) => {
    return (
      <ToDoItem
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });

  return (
    <div className="App">
      <h1 className="text-center text-2xl md:text-3xl font-bold py-3 px-2">
        ToDo List
      </h1>
      <form
        onSubmit={saveToDoList}
        className="mx-auto flex flex-col md:flex-row max-w-md gap-2 py-3 justify-center items-center px-2"
      >
        <input
          className="border p-2 w-full md:basis-[80%]"
          type="text"
          name="toname"
          placeholder="To Do"
        />
        <button className="border p-2 bg-gray-300 rounded-2xl">Save</button>
      </form>
      <div className="px-2">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoItem({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);
  let check = () => {
    setStatus(!status);
  };
  let deleteRow = (event) => {
    event.stopPropagation();
    let finalData = todolist.filter((val, idx) => idx !== indexNumber);
    setTodolist(finalData);
  };
  return (
    <li
      onClick={check}
      className={`border mx-auto max-w-md p-3 font-bold relative bg-gray-300 rounded-b-md mb-3 ${status ? "line-through" : ""}`}
    >
      {indexNumber + 1 + "."}
      {value}
      <span onClick={deleteRow} className="right-3 absolute cursor-pointer">
        &times;
      </span>
    </li>
  );
}
