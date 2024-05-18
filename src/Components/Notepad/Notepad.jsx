import React, { useEffect, useState } from 'react'
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
  const [mobilenav, setmobilenav] = useState(false)

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
    setmobilenav(!mobilenav)
  }

  const handleResize = () => {
    window.innerWidth < 768 ? setmobilenav(true) : setmobilenav(false)
  };

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="md:hidden flex justify-center mt-10">
        <button onClick={myFunction} className=" text-center border-transparent">Menu</button>
      </div>
      <div style={{ display: mobilenav ? 'none' : 'flex' }} className={`hidden md:flex md:mt-1 flex-wrap gap-2 justify-center items-center`} >
        <button className="text-center border-transparent" onClick={capital1st}>
          Aa
        </button>
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
        <select id="cards" onChange={fontstylecng} className='select rounded-2xl focus:outline-none border-transparent'>
          <option value="normal">normal</option>
          <option value="italic">Italic</option>
        </select>
        <select id="cards2" onChange={fontsizecng} className='select rounded-2xl focus:outline-none border-transparent'>
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
      {select && <Replacemodal closemodal={closemodal} newword={newword} prevword={prevword} setNewword={setNewword} setPrevword={setPrevword} />}
      <div className="flex justify-center items-center">
        <textarea
          id='textbox'
          rows="10" cols="100"
          value={notes}
          onChange={displaychange}
          style={{ fontStyle: font, fontSize: size }}
          placeholder="write something..."
          className="shadow-[0px_5px_5px_rgba(13,69,77,0.5)] border border-slate-400 rounded-2xl resize-none m-4 mx-auto p-3 w-[96vw] md:h-[55vh] h-[62vh] text-lg focus:outline-none"
        ></textarea>
      </div>
      <div className='rounded-lg font-semibold bg-blue-100 px-10 w-full border border-blue-100 text-center'>words - {notes.split(" ").filter((a) => a != 0).length} and characters - {notes.length}</div>
    </>

  )
}

export default Notepad