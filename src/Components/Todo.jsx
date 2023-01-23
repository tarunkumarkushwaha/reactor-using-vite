import React, { useState } from "react";
import Navbar from "./navbar";
const Todo = () => {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);
  // const [key, setKey] = useState(0);
  
  const displaychange = (e) => {
    setItem(e.target.value);
  };
  const clickevent = () => {
    // very important settodo returns the initial state in the userstate
    setTodo((olditems) => {
      return [...olditems, item]
    })
    localStorage.setItem("items",todo)
    //  it clears the input field 
    setItem('')
    
  };

  const current =()=>{
    console.log(key);
  }
  const Delete = (a) => {
    setTodo([])
  }
  const deletetodo = (a) => {
    console.log("delete",a, todo.indexOf(a));
    setTodo(todo.filter((e)=>{return e!==a}))
  }
  return (
    <>
      <Navbar />
      <div className="flex-row-center">
        <textarea
          rows="4" cols="30"
          value={item}
          onChange={displaychange}
          placeholder="enter your task"
          className="outer text-center border-black input1"
        ></textarea>
        <div className="flex-column-center">
          <button className="text-center" onClick={clickevent}>
            Click to add a To-do
          </button>
          <button className="text-center" onClick={Delete}>
            Erase all
          </button>
          <button className="text-center" onClick={current}>
            current
          </button>
        </div>
        <div className="outer text-center border-black">
          {todo.map((a) => {
            return <div key ={todo.indexOf(a)+1} className="tododiv border-black">
              <p className="to-do"><input type="checkbox" id="check" />
              {todo.indexOf(a)+1}.{a}
            </p>
            <b className="deletetodo" onClick={() => {deletetodo(a)}}>X</b>
            </div>
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
