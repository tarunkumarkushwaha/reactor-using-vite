import React, { useState } from 'react'

const Replacemodal = ({prevword,newword,setPrevword,setNewword,closemodal}) => {
  // let prevword = "pop"
  // let newword = "hop"
  const onchange1 = (e) => {
    setPrevword(e.target.value)
  }
  const onchange2 = (e) => {
    setNewword(e.target.value)
  }
  return (
    <>
      <div className='modal border-black flex-row-center'>
        <input
          type="text"
          className="text-center border-black input2"
          placeholder="Word to be replaced"
          value={prevword}
          onChange={onchange1}
        ></input>
        <input
          type="text"
          className="text-center border-black input2"
          placeholder="Replace with"
          value={newword}
          onChange={onchange2}
        ></input>
        <button onClick={closemodal}>Ok</button>
      </div>
    </>
  )
}
export default Replacemodal
// export { prevword, newword }