import React, { useState } from "react";
import Navbar from "./navbar";
export default function NumberSorter() {
  const [val, setVal] = useState("1,2,3,4,5,6,7");
  const [cr, setCr] = useState(5);
  const [comp, setComp] = useState("enter number");
  const [output, setOutput] = useState("output");
  let a;
  let c;
  let arr = [];
  const change1 = (e) => {
    setVal(e.target.value)
  };
  const change2 = (e) => {
    setCr(e.target.value)
  }
  const lessthan = () => {
    a = val;
    arr.push(a);
    // setVal("less than clicked")
    let num = arr[0].split(",").map((element) => {
      return parseInt(Number(element));
    });

    c = +cr;
    setComp("less than");
    let b = num.filter((m) => {
      return m < c;
    });
    let result = b.toString();
    setOutput(result);
    console.log(typeof b, b);
  };
  const morethan = () => {
    a = val;
    arr.push(a);

    let num = arr[0].split(",").map((element) => {
      return parseInt(Number(element));
    });

    c = +cr;
    setComp("more than");
    let b = num.filter((m) => {
      return m > c;
    });
    let result = b.toString();
    setOutput(result);
    console.log(typeof b, b);
  };
  return (
    <>
      <Navbar/>
      <div className="flex-row-center">
        <div className="text-center border-black box">
          <p>Array of numbers</p>
          <textarea
            rows="4" cols="30"
            value={val}
            onChange={change1}
            placeholder="enter the array"
            className="text-center border-black input1"
          ></textarea>
        </div>
        <button onClick={lessthan} className="text-center border-black">
          Less than
        </button>

        <button onClick={morethan} className="text-center border-black">
          More than
        </button>
        <div className="text-center border-black box flex-column-center">
          <p>{comp}</p>
          <input
            type="text"
            className="text-center border-black input2"
            placeholder="enter the number"
            value={cr}
            onChange={change2}
          ></input>
        </div>
        <div className="text-center border-black displaybrd box">
          {output}
        </div>
      </div>
    </>
  );
}
