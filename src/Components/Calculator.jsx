import React, { useState } from 'react'
import Navbar from './navbar'
const Calculator = () => {
  const [Output, setOutput] = useState("");
  const percentCalculator = (e) => {
    let input = Output.split("/")
    setOutput(eval(input[0]/input[1]*100).toString())
  }
  const clicked = (e) => {
    setOutput(Output.concat(e.target.value))
  }
  const change = (e) => {
    setOutput(e.target.value)
    // sorry "=" button on keyboard is not mapped, use enter key or "=" button on calculator to evaluate
    // console.log(Output)
  }
  const result = () => {
    setOutput(eval(Output).toString())
  }
  const clinicAllClear = () => {
    setOutput("")
  }
  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      // e.preventDefault();
      result();
    }
  }
  return (
    <>
      <Navbar />
      <div className="border-transparent calculator">
        <input type="text" className="calcdisplay shadow border-transparent" onChange={change} value={Output} onKeyDown={onEnterPress} />
        <button value={7} className="calcbutton border-transparent" onClick={clicked}>7</button>
        <button value={8} className="calcbutton border-transparent" onClick={clicked}>8</button>
        <button value={9} className="calcbutton border-transparent" onClick={clicked}>9</button>
        <button value={4} className="calcbutton border-transparent" onClick={clicked}>4</button>
        <button value={5} className="calcbutton border-transparent" onClick={clicked}>5</button>
        <button value={6} className="calcbutton border-transparent" onClick={clicked}>6</button>
        <button value={1} className="calcbutton border-transparent" onClick={clicked}>1</button>
        <button value={2} className="calcbutton border-transparent" onClick={clicked}>2</button>
        <button value={3} className="calcbutton border-transparent" onClick={clicked}>3</button>
        <button value={0} className="calcbutton border-transparent" onClick={clicked}>0</button>
        <button value={"+"} className="calcbutton border-transparent" onClick={clicked}>+</button>
        <button value={"."} className="calcbutton border-transparent" onClick={clicked}>.</button>
        <button value={"-"} className="calcbutton border-transparent" onClick={clicked}>-</button>
        <button value={"*"} className="calcbutton border-transparent" onClick={clicked}>x</button>
        <button value={"/"} className="calcbutton border-transparent" onClick={clicked}>/</button>
        <button value={"%"} className="calcbutton border-transparent" onClick={percentCalculator}>%</button>
        <button value={"clear"} className="calcbutton border-transparent" onClick={clinicAllClear}>C</button>
        <button value={"="} className="calcbutton border-transparent" onClick={result}>=</button>
      </div>
    </>
  )
}

export default Calculator