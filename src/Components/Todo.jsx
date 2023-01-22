import React, { useState } from "react";
import Navbar from "./navbar";
const Todo = () => {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);
  // const [key1, setKey1] = useState(1);

  const displaychange = (e) => {
    setItem(e.target.value);
  };
  const clickevent = () => {
    // very important settodo returns the initial state in the userstate
    
    setTodo((olditems) => { 
      localStorage.setItem("key",[...olditems, item])
      return [...olditems, item] })
    // setKey1(key1+1)

     //  it clears the input field 
    setItem('')
  };
  // let val
  const Delete = (a) => { setTodo([]) }
  return (
    <>
      <Navbar />
      <div className="flex-row-center">
        <textarea
          rows="4" cols="30"
          value={item}
          onChange={displaychange}
          placeholder="enter your todo"
          className="outer text-center border-black input1"
        ></textarea>
      <div className="flex-column-center">
        <button className="text-center" onClick={clickevent}>
          Click to add a To-do
        </button>
        <button className="text-center" onClick={Delete}>
          Erase all
        </button>
      </div>
      <div className="outer text-center border-black">
        {todo.map((a) => {
          return <p key={a} className="to-do border-black"><input type="checkbox" name="" value={key1} id="check" /> {a}</p>
        })}
      </div>
      </div>
    </>
  );
};

export default Todo;
