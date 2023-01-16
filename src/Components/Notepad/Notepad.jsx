import React from 'react'
import Navbar from '../navbar'
function Notepad() {
    return (
        <>
            <Navbar />
            <div>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
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