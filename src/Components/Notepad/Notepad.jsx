import React from 'react'
import Navbar from '../navbar'
function Notepad() {
    return (
        <>
            <Navbar />
            <div className="flex-row-center">
        <button className="text-center">
          Capitalize 1st letter
        </button>
        <button className="text-center">
          Erase all
        </button>
        <button className="text-center">
          Save
        </button>
      </div>
            <div className="border-black flex-row-center">
                <textarea
                    rows="10" cols="100"
                    placeholder="under construction..."
                    className="outer text-center border-black"
                ></textarea>
            </div>

        </>

    )
}

export default Notepad