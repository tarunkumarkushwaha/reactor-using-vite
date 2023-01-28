import React, { useState } from "react";
import Navbar from "./navbar";
const Todo = () => {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);
  const [goals, setGoals] = useState([]);
  const [key, setKey] = useState(false);

  const displaychange = (e) => {
    setItem(e.target.value);
  };
  const clickevent = () => {
    // very important settodo returns the initial state in the userstate
    // it works as Array.push method 
    setTodo((olditems) => {
      return [...olditems, item]
    })
    //  it clears the input field 
    setItem('')
    // save to localStorage
    localStorage.setItem("items",todo) 

    // it works as Array.push method 
    setGoals((olditems) => {
      return [...olditems, key]})
  };

  const current =()=>{
    alert(goals)
  }
  const Delete = (a) => {
    setTodo([])
    localStorage.removeItem("items")
  }
  const deletetodo = (a) => {
    setTodo(todo.filter((e)=>{return e!==a}))
    localStorage.setItem("items",todo)
  }
  const checkbx = () => {
   key?setKey(false):setKey(true)
  
  // setGoals((olditems)=>{return[...olditems,hoho.value]})
  // localStorage.setItem("targets",goals)   
  }
//   checkbx().then(()=>{
//   let id = todo.indexOf(a)+"todoitem"
//   let hoho = document.getElementById(id)
//   setGoals(hoho.value)
// //  setGoals(key)
// })

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
              <p className="to-do"><input type="checkbox" id={todo.indexOf(a)+"todoitem"} value={key} onClick={()=>{checkbx()}} /> {" "}
              {todo.indexOf(a)+1}. {a}
              
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
