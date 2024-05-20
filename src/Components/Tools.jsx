import React, { useEffect, useRef, useState } from 'react'
import functionarray from '../assets/scripts/script1';

const Tools = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setoutput] = useState('');
  const [functionInput1, setfunctionInput1] = useState("");
  const [functionInput2, setfunctionInput2] = useState("");
  const [activeFunction, setactiveFunction] = useState(functionarray[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    setShowDropdown(true)
  };

  const handleFunctionInputChange1 = (e) => {
    setfunctionInput1(e.target.value)
  };

  const handleFunctionInputChange2 = (e) => {
    setfunctionInput2(e.target.value)
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const filteredOptions = functionarray.filter(option =>
    option.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleOptionClick = (options) => {
    setactiveFunction(options)
    setInputValue(options.name);
    setShowDropdown(false);
  };

  const functionHandler = async () => {
    let result = ""
    if (activeFunction.inputs[0] == "string") {
      result = await activeFunction.function(functionInput1)
      if (typeof result == "boolean" && result == true) {
        result = "yes"
      } else if (typeof result == "boolean" && result == false) { result = "no" }
    }
    else if (activeFunction.inputs[0] == "number") {
      result = await activeFunction.function(parseInt(functionInput1))
      if (typeof result == "boolean" && result == true) {
        result = "yes"
      } else if (typeof result == "boolean" && result == false) { result = "no" }
    }
    else if (activeFunction.inputs[0] == "num array") {
      result = await activeFunction.function(functionInput1.split(',').map((item => parseInt(item))))
      if (typeof result == "boolean" && result == true) {
        result = "yes"
      } else if (typeof result == "boolean" && result == false) { result = "no" }
    }
    else if (activeFunction.inputs.length == 2) {
      result = await activeFunction.function(functionInput1, functionInput2)
      if (typeof result == "boolean" && result == true) {
        result = "yes"
      } else if (typeof result == "boolean" && result == false) { result = "no" }
    }
    else { result = "function under construction" }
    setoutput(result)
    // setfunctionInput1('')
  }

  return (
    <div className="h-screen bg-gradient-to-b from-white to-blue-300 w-full smooth-entry">
      <div className="relative p-5 flex justify-center items-center" ref={inputRef}>
        <div className="flex w-80 border border-gray-300 rounded-md">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="search tools like..."
            className="w-full px-4 py-2 focus:outline-none rounded-md focus:border-none"
          />
          <div
            className="px-4 py-2 focus:outline-none hover:border-none cursor-pointer"
            onClick={handleToggleDropdown}
          >
            &#9660;
          </div>
        </div>
        {showDropdown && (
          <div className="absolute top-16 w-80 max-h-80 overflow-scroll overflow-x-hidden z-10 mt-1 bg-white border border-gray-300 rounded shadow-lg">
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleOptionClick(option)}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='flex flex-col gap-3 items-center justify-center'>
        <div>
          <input
            type="text"
            value={functionInput1}
            onChange={handleFunctionInputChange1}
            placeholder={activeFunction.inputs[0]}
            className="w-full px-4 py-2 rounded-md border border-blue-950 focus:border-blue-400 focus:outline-none"
          />
          {activeFunction.inputs.length == 2 &&
            <input
              type="text"
              value={functionInput2}
              onChange={handleFunctionInputChange2}
              placeholder={activeFunction.inputs[1]}
              className="w-full px-4 py-2 rounded-md border border-blue-950 focus:border-blue-400 focus:outline-none"
            />
          }
        </div>
        <button onClick={functionHandler} className='bg-white'>Execute</button>
        <div>
          output is {output}
        </div>
      </div>

    </div>
  );
};

export default Tools