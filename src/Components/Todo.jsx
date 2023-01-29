import React, { useState } from "react";
import Navbar from "./navbar";

const Todo = () => {
  let num = localStorage.getItem("items") ? localStorage.getItem("items").split(",") : []

  // states 
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState(num);

  // display change event 
  const displaychange = (e) => {
    setItem(e.target.value);
  };
  // button event 
  const addtodo = () => {
    // settodo returns the initial state in the userstate
    // it works as Array.push method 
    setTodo((olditems) => {
      return [...olditems, item]
    })
    setItem('')
    // save to localStorage
    localStorage.setItem("items", todo)
  }
  const Delete = (a) => {
    setTodo([])
    localStorage.removeItem("items")
  }
  const deletetodo = (a) => {
    setTodo(todo.filter((e) => { return e !== a }))
  }
  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      //   addtodo();
      alert(localStorage.getItem("items"))
    }

  }

  return (
    <>
      <Navbar />
      <div className="flex-row-center">
        <textarea
          rows="4" cols="30"
          value={item}
          onChange={displaychange}
          onKeyDown={onEnterPress}
          placeholder="enter your task"
          className="outer text-center border-black input1"
        ></textarea>
        <div className="flex-column-center">
          <button className="text-center" onClick={addtodo}>
            Click to add a To-do
          </button>
          <button className="text-center" onClick={Delete}>
            Reset
          </button>
        </div>
        <div className="outer text-center border-black">
          {todo.map((a) => {
            return <div key={todo.indexOf(a) + 1} className="tododiv border-black">
              <p className="to-do" id={todo.indexOf(a) + "todoitem"}> {" "}
                {todo.indexOf(a) + 1}. {a}
              </p>
              <b className="deletetodo" onClick={() => { deletetodo(a) }}>X</b>
            </div>
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
