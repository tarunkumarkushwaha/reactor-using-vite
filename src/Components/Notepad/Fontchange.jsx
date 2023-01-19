import React from 'react'

const Fontchange = ({ closemodal2 }) => {
    return (
        <>
            <div className='modal border-black flex-row-center'>
                <select id="cards" className='calcbutton border-black'>
                    <option className='border-black' value="volvo">bold</option>
                    <option className='border-black' value="saab">Small</option>
                    <option className='border-black' value="opel">big</option>
                    <option className='border-black' value="audi">ultra</option>
                </select>
                <button onClick={closemodal2}>Ok</button>
            </div>
        </>
    )
}

export default Fontchange