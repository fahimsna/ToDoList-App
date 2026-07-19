import { useState } from "react";
import "./App.css";

function App() {
  let [todolist, setTodolist] = useState([]);
  let saveToDoList = (event) => {
    event.preventDefault();
    let toname = event.target.toname.value.trim();
    if (todolist.includes(toname)) {
      alert("ToDo name already Exists...");
    } else {
      let finalTodolist = [...todolist, toname];
      setTodolist(finalTodolist);
    }
  };
  let list = todolist.map((value, index) => {
    return (
      <ToDoListItem
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
      <h1 className="text-center font-bold text-3xl mt-4">ToDo List</h1>
      <form
        onSubmit={saveToDoList}
        className="w-292.5 mx-auto flex items-center justify-center gap-2 mt-5"
      >
        <input
          className="border bg-white rounded px-3 py-2 flex basis-[70%]"
          type="text"
          name="toname"
          placeholder="To do"
        />
        <button className="bg-gray-500 text-white rounded px-4 py-2">
          Save
        </button>
      </form>
      <div className="w-292.5 mx-auto  mt-5 p-2.5 bg-white-300 font-bold">
        <ul className="">{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItem({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);
  let deleteRow = (event) => {
    event.stopPropagation();
    let finalData = todolist.filter((value, idx) => idx !== indexNumber);
    setTodolist(finalData);
  };
  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li
      onClick={checkStatus}
      className={`relative border rounded bg-gray-300 p-3 mb-3 ${status ? "line-through" : ""}`}
    >
      {indexNumber + 1 + "."}
      {value}{" "}
      <span onClick={deleteRow} className="absolute right-3 cursor-pointer">
        &times;
      </span>
    </li>
  );
}
