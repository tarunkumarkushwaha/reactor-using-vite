import React, { useState } from 'react'
import Navbar from './navbar'
const Calculator = () => {
  const [Output, setOutput] = useState("");
  const clicked = (e) => {
    setOutput(Output.concat(e.target.value))
  }
  const change = (e) => {
    setOutput(e.target.value)
    // sorry "=" button on keyboard donot work 
    console.log(Output)
  }
  const result = () => {
    setOutput(eval(Output).toString())
  }
  const clinicAllClear = () => {
    setOutput("")
  }
  return (
    <>
      <Navbar/>
      <div className="border-black calculator">
        <input type="text" value={Output} className="calcdisplay border-black" onChange={change} />
        <button value={7} className="calcbutton border-black" onClick={clicked}>7</button>
        <button value={8} className="calcbutton border-black" onClick={clicked}>8</button>
        <button value={9} className="calcbutton border-black" onClick={clicked}>9</button>
        <button value={4} className="calcbutton border-black" onClick={clicked}>4</button>
        <button value={5} className="calcbutton border-black" onClick={clicked}>5</button>
        <button value={6} className="calcbutton border-black" onClick={clicked}>6</button>
        <button value={1} className="calcbutton border-black" onClick={clicked}>1</button>
        <button value={2} className="calcbutton border-black" onClick={clicked}>2</button>
        <button value={3} className="calcbutton border-black" onClick={clicked}>3</button>
        <button value={0} className="calcbutton border-black" onClick={clicked}>0</button>
        <button value={"+"} className="calcbutton border-black" onClick={clicked}>+</button>
        <button value={"."} className="calcbutton border-black" onClick={clicked}>.</button>
        <button value={"-"} className="calcbutton border-black" onClick={clicked}>-</button>
        <button value={"*"} className="calcbutton border-black" onClick={clicked}>x</button>
        <button value={"/"} className="calcbutton border-black" onClick={clicked}>/</button>
        <button value={"%"} className="calcbutton border-black" onClick={clicked}>remnder</button>
        <button value={"clear"} className="calcbutton border-black" onClick={clinicAllClear}>clear</button>
        <button value={"="} className="calcbutton border-black" onClick={result}>=</button>
      </div>
    </>
  )
}

export default Calculator