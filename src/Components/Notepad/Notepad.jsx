import React, { useState } from 'react'
import Navbar from '../navbar'
import Fontchange from './Fontchange'
import Replacemodal from './Replacemodal'
function Notepad() {
  // states 
  const [notes, setNotes] = useState("")
  const [select, setSelect] = useState(false)
  const [select2, setSelect2] = useState(false)
  const [prevword, setPrevword] = useState("")
  const [newword, setNewword] = useState("")
  //  click handlers
  const upclick = () => {
    setNotes(notes.toUpperCase())
  }
  const copy = () => {
    let clipbrd = document.getElementsByID("testbox")
    clipbrd.select()
    navigator.clipboard.writeText(clipbrd.value)
  }
  const paste = async () => {
      const text = await navigator.clipboard.readText();
      setNotes(notes+text)
    }
  
  const downclick = () => {
    setNotes(notes.toLowerCase())
  }
  const capital1st = () => {
    let arr = notes.split(" ")
    let arr2 = arr.map((n) => n.slice(0, 1).toUpperCase().concat(n.slice(1).toLowerCase()))
    setNotes(arr2.join(" "))
  }
  const eraseall = () => { setNotes("") }

  const displaychange = (e) => {
    setNotes(e.target.value)
  }
  const replace = () => {
    setSelect(true)
  }
  const changefont = () => {
    setSelect2(true)
  }
  const closemodal2 = () => {
    setSelect2(false)
  }
  const closemodal = () => {
    setSelect(false)
    setNotes(notes.split(prevword + " ").join(newword + " "))
    // does not work with words ending with "."
  }
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
        <button className="text-center" onClick={paste}>
          Paste
        </button>
        <button className="text-center" onClick={replace}>
          Replace
        </button>
        <button className="text-center" onClick={changefont}>
          Font
        </button>
      </div>
      {select ? <Replacemodal closemodal={closemodal} newword={newword} prevword={prevword} setNewword={setNewword} setPrevword={setPrevword} /> : null}
      {select2 ? <Fontchange closemodal2={closemodal2}/>:null}
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