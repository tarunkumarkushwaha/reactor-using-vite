import React, { useState } from 'react'
import Navbar from '../navbar'
import Replacemodal from './Replacemodal'
// import {prevword,newword} from './Replacemodal'
function Notepad() {
  const [notes, setNotes] = useState("")
  const [select, setSelect] = useState(false)
  const upclick = () => {
    setNotes(notes.toUpperCase())
  }
  const copy = () => {
    let clipbrd = document.getElementsByID("testbox")
    clipbrd.select()
    navigator.clipboard.writeText(clipbrd.value)
  }

  const replace = () => {
    setSelect(true)
  }
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
  // jst for testing
  let prevword = "pop"
  let newword = "hop"
  const closemodal = () => {
    setSelect(false)
    setNotes(notes.split(prevword + " ").join(newword + " "))
    // console.log(cards.value);
  }
  // const changefont=()=>{
  //   console.log(cards,value)
  // }
  return (
    <>
      <Navbar />
      <div className="flex-row-center" id='btn-list' >
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
        <button className="text-center" onClick={replace}>
          Replace
        </button>
        {/* <select id="cards" onSelect={changefont}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select> */}
      </div>
      {select ? <Replacemodal closemodal={closemodal} /> : null}
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