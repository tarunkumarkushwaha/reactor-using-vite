import React, { useState } from 'react'
import Navbar from '../navbar'
import Replacemodal from './Replacemodal'
function Notepad() {

  // states 
  const [notes, setNotes] = useState(localStorage.getItem("key") ? localStorage.getItem("key") : "")
  const [select, setSelect] = useState(false)
  const [prevword, setPrevword] = useState("")
  const [newword, setNewword] = useState("")
  const [font, setFont] = useState("normal")
  const [size, setSize] = useState("larger")

  // displaychange handler 
  const displaychange = (e) => {
    setNotes(e.target.value)
    localStorage.setItem("key", e.target.value)
  }

  //  click handlers
  const upclick = () => {
    setNotes(notes.toUpperCase())
    localStorage.setItem("key", notes.toUpperCase())
  }
  const downclick = () => {
    setNotes(notes.toLowerCase())
    localStorage.setItem("key", notes.toLowerCase())
  }
  const copy = () => {
    let clipbrd = document.getElementById('textbox')
    clipbrd.select()
    navigator.clipboard.writeText(clipbrd.value)
    document.getSelection().removeAllRanges()
  }
  const paste = async () => {
    const text = await navigator.clipboard.readText();
    setNotes(notes + text)
    localStorage.setItem("key", notes + text)
  }
  const capital1st = () => {
    let arr = notes.split(" ")
    let arr2 = arr.map((n) => n.slice(0, 1).toUpperCase().concat(n.slice(1).toLowerCase()))
    setNotes(arr2.join(" "))
    localStorage.setItem("key", arr2.join(" "))
  }
  const eraseall = () => {
    setNotes("")
    localStorage.setItem("key", "")
  }
  const replace = () => {
    setSelect(true)
  }
  const closemodal = () => {
    setSelect(false)
    setNotes(notes.split(prevword + " ").join(newword + " "))
    localStorage.setItem("key", notes.split(prevword + " ").join(newword + " "))
  }
  const fontstylecng = () => {
    let cards = document.getElementById('cards')
    setFont(cards.value)
    // localStorage.setItem("key",notes) bugg
  }
  const fontsizecng = () => {
    let cards2 = document.getElementById('cards2')
    setSize(cards2.value)
    // localStorage.setItem("key",notes)  bugg
  }
  const requestTarunToDownload = () => {
    // sourced from internet

    const link = document.createElement("a");
    const content = notes;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "sample.txt";
    link.click();
    URL.revokeObjectURL(link.href);
  }
  return (
    <>
      <Navbar />
      <div className="flex-row-center" id='btn-list' >
        <button className="text-center" onClick={capital1st}>
          Capitalize
        </button>
        <button className="text-center" onClick={upclick}>
          All Upper case
        </button>
        <button className="text-center" onClick={downclick}>
          All Lower case
        </button>
        <button className="text-center" onClick={eraseall}>
          Erase all
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
        <select id="cards" onChange={fontstylecng} className='cards border-black'>
          <option value="normal">normal</option>
          <option value="italic">Italic</option>
        </select>
        <select id="cards2" onChange={fontsizecng} className='cards border-black'>
          <option className='border-black' value="larger">Size</option>
          <option className='border-black' value="larger">normal</option>
          <option className='border-black' value="medium">very small</option>
          <option className='border-black' value="large">small</option>
          <option className='border-black' value="x-large">large</option>
          <option className='border-black' value="xx-large">larger</option>
        </select>
        <button className="text-center" onClick={requestTarunToDownload}>
          Download
        </button>
      </div>
      {select ? <Replacemodal closemodal={closemodal} newword={newword} prevword={prevword} setNewword={setNewword} setPrevword={setPrevword} /> : null}
      <div className="flex-row-center">
        <textarea
          id='textbox'
          rows="10" cols="100"
          value={notes}
          onChange={displaychange}
          style={{ fontStyle: font, fontSize: size }}
          placeholder="write something..."
          className="outer2 border-black"
        ></textarea>
      </div>
      <div className='border-black to-do'>no of words - {notes.split(" ").filter((a) => a != 0).length} and no of characters - {notes.length}</div>
    </>

  )
}

export default Notepad