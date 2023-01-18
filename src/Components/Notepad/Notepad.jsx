import React, { useState } from 'react'
import Navbar from '../navbar'
function Notepad() {
const [notes, setNotes] = useState("")
const upclick=()=>{
  setNotes(notes.toUpperCase())
  // console.log(notes)
}
const downclick=()=>{
  setNotes(notes.toLowerCase())
  // console.log(notes)
}
const capital1st =()=>{
   let arr = notes.split(" ")
   let arr2 = arr.map((n)=>n.slice(0,1).toUpperCase().concat(n.slice(1).toLowerCase()))
   setNotes(arr2.join(" "))
  //  console.log(arr2.join(" "))
}
const eraseall =()=>{setNotes("")}
const displaychange=(e)=>{
      setNotes(e.target.value)
}
    return (
        <>
            <Navbar/>
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
      </div>
            <div className="flex-row-center">
                <textarea
                    rows="10" cols="100"
                    value={notes}
                    onChange={displaychange}
                    placeholder="write something..."
                    className="outer2 border-black"
                ></textarea>
            </div>

        </>

    )
}

export default Notepad