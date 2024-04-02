import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

const Todo = () => {
  const [item, setItem] = useState({
    data: "",
    completed: false
  });
  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('items')) || []);

  const displaychange = (e) => {
    setItem({
      data: e.target.value,
      completed: false
    });
  };

  const addtodo = () => {
    setTodo((olditems) => {
      return [...olditems, item]
    })
    setItem({
      data: "",
      completed: false
    });

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

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Navbar />
      <div className="flex-column-center ">
        <div className="flex-row-center">
          <input
            type="text"
            value={item.data}
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
          {todo.map((a, i) => {
            return <div key={i} className="tododiv">
              <input className="todoCheck" type="checkbox" checked={todo[i].completed}
                onChange={(e) => {

                  let modtodo = [...todo]
                  modtodo[i].completed = e.target.checked
                  setTodo(modtodo)

                }} />
              <p className={`${todo[i].completed ? "completedtodo" : "to-do"}`}>{i + 1}.{" "}</p>
              <p className={`${todo[i].completed ? "completedtodo" : "to-do"}`}>
                {a.data}
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
