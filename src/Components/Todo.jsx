import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

const Todo = () => {
  // let num = localStorage.getItem("items") ? localStorage.getItem("items").split(",") : []

  // states 
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('items')) || []);

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
    localStorage.setItem("items", JSON.stringify(todo))
  }
  const Delete = (a) => {
    setTodo([])
    localStorage.clear()
  }
  const deletetodo = (a) => {
    setTodo(todo.filter((e) => { return e !== a }))
    localStorage.setItem('items', JSON.stringify(todo));
  }
  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      addtodo();
    }
  }
  // when usestate todo changes function in use effect is called 
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Navbar />
      <div className="flex-column-center">
        <div className="flex-row-center">
          <input
            type="text"
            value={item}
            onChange={displaychange}
            onKeyDown={onEnterPress}
            placeholder="enter your task"
            className="border-transparent shadow input-todo"
          ></input>
          <button className="text-center border-transparent shadow todo-button" onClick={addtodo}>
            Add
          </button>
          <button className="text-center border-transparent shadow todo-button" onClick={Delete}>
            Reset
          </button>
        </div>
        <div className="todo-display shadow text-center">
          {todo.map((a) => {
            return <div key={todo.indexOf(a) + 1} className="tododiv">
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
