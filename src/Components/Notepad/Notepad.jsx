import React, { useState } from 'react'
import Navbar from '../navbar'
import Replacemodal from './Replacemodal'
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import PrintIcon from '@mui/icons-material/Print';
import DownloadIcon from '@mui/icons-material/Download';

function Notepad() {

  // states 
  const [notes, setNotes] = useState(localStorage.getItem("key") ? localStorage.getItem("key") : "")
  const [select, setSelect] = useState(false)
  const [prevword, setPrevword] = useState("")
  const [newword, setNewword] = useState("")
  const [font, setFont] = useState("normal")
  const [size, setSize] = useState("larger")
  const [mobilenav, setmobilenav] = useState("btn-list")

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
  const cut = () => {
    let clipbrd = document.getElementById('textbox')
    clipbrd.select()
    navigator.clipboard.writeText(clipbrd.value)
    document.getSelection().removeAllRanges()
    setNotes("")
    localStorage.setItem("key", "")
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
    setSelect(!select)
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

  // navbar button dropdown
  const myFunction = () => {
    mobilenav == "mobile-content" ? setmobilenav("btn-list") : setmobilenav("mobile-content")
  }

  return (
    <>
      <Navbar />
      <div className="dropdown">
        <button onClick={myFunction} className="dropbtn text-center">Menu</button>
      </div>

      <div className={mobilenav} >
        <button className="text-center capital border-transparent" onClick={capital1st}>
          Aa
        </button>
        {/* <div class="Extra-Text">
        <p>
        capital
        </p>
    </div> */}
        <button className="text-center border-transparent" onClick={upclick}>
          AA
        </button>
        <button className="text-center border-transparent" onClick={downclick}>
          aa
        </button>
        <button className="text-center border-transparent" onClick={eraseall}>
          <DeleteIcon />
        </button>
        <button className="text-center border-transparent" onClick={cut}>
          <ContentCutIcon />
        </button>
        <button className="text-center border-transparent" onClick={copy}>
          <ContentCopyIcon />
        </button>
        <button className="text-center border-transparent" onClick={paste}>
          <ContentPasteGoIcon />
        </button>
        <button className="text-center border-transparent" onClick={replace}>
          <PublishedWithChangesIcon />
        </button>
        <button className="text-center border-transparent" onClick={() => window.print()}>
          <PrintIcon />
        </button>
        <select id="cards" onChange={fontstylecng} className='select border-transparent'>
          <option value="normal">normal</option>
          <option value="italic">Italic</option>
        </select>
        <select id="cards2" onChange={fontsizecng} className='select border-transparent'>
          <option value="larger">Size</option>
          <option value="larger">normal</option>
          <option value="medium">very small</option>
          <option value="large">small</option>
          <option value="x-large">large</option>
          <option value="xx-large">larger</option>
        </select>
        <button className="text-center border-transparent" onClick={requestTarunToDownload}>
          <DownloadIcon />
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
          className="notepad-display border-transparent shadow"
        ></textarea>
      </div>
      <div className='border-groove-light to-do'>no of words - {notes.split(" ").filter((a) => a != 0).length} and no of characters - {notes.length}</div>
    </>

  )
}

export default Notepad