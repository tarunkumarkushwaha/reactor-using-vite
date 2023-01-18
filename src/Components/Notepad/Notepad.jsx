import React, { useState } from 'react'
import Navbar from '../navbar'
function Notepad() {
  const [notes, setNotes] = useState("")
  const [select, setSelect] = useState("")
  const upclick = () => {
    setNotes(notes.toUpperCase())
  }
  const copy = () => {
    let clipbrd = document.getElementById("textbox")
    clipbrd.select()
    navigator.clipboard.writeText(clipbrd.value)
  }
  
  // const cut = (e) => {
  //   let clipbrd = document.getElementById("textbox")
  //   // var seto = clipbrd.current.select()
  //   console.log(e.target.focus);
  // }
  const downclick = () => {
    setNotes(notes.toLowerCase())
  }
  const capital1st = () => {
    let arr = notes.split(" ")
    let arr2 = arr.map((n) => n.slice(0, 1).toUpperCase().concat(n.slice(1).toLowerCase()))
    setNotes(arr2.join(" "))
    //  console.log(arr2.join(" "))
  }
  const eraseall = () => { setNotes("") }
  const displaychange = (e) => {
    setNotes(e.target.value)
  }
  const displaychange2 = (e) => {
    setSelect(e.target.value)
  }
  return (
    <>
      <Navbar />
      <div className="btn-list flex-row-center">
        <button className="text-center" onClick={capital1st}>
          Capitalize 1st letter
        </button>
        <button className="text-center" onClick={eraseall}>
          Erase all
        </button>
        <button className="text-center" onClick={upclick}>
          All Upper case
        </button>
        <button className="text-center" onClick={downclick}>
          All Lower case
        </button>
        <button className="text-center" onClick={copy}>
          Copy
        </button>
        
      </div>
      <div className="flex-row-center">
        <textarea
          id='textbox'
          rows="10" cols="100"
          value={notes}
          onChange={displaychange}
          placeholder="write something..."
          className="outer2 border-black"
        ></textarea>
      </div>
      <div className='border-black to-do'>no of words - {notes.split(" ").length} and no of characters - {notes.length}</div>
    </>

  )
}

export default Notepad