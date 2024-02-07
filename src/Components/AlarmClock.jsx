import React, { useState, useRef } from 'react'
import Navbar from "./navbar";

const AlarmClock = () => {
    const [clockSetting, setclockSetting] = useState(false)
    const [alarmBtnText, setalarmBtnText] = useState(false)
    const [time, settime] = useState("Fetching time")
    const [alarmMin, setalarmMin] = useState(0)
    const [alarmSec, setalarmSec] = useState(0)
    const [alarmHr, setalarmHr] = useState(0)
    const [alarmAMPM, setalarmAMPM] = useState(0)
    const [ampm, setampm] = useState("")
    const [date, setdate] = useState("")
    let minOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]
    let hrsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const myclock = () => {
        let t = new Date();
        let d = t.getDate()
        let mn = t.getMonth()
        let y = t.getFullYear()
        let h = (12 - (t.getHours()));
        let m = t.getMinutes();
        let s = t.getSeconds();
        let ampmy = (t.getHours()) < 12 ? 'AM' : 'PM';
        if (h < 0) {
            h = h * -1;
        } else if (h == 0) {
            h = 12;
        } else {
            h = h;
        }
        settime(`${(h < 10) ? "0" + h : h} :${(m < 10) ? "0" + m : m} :${(s < 10) ? "0" + s : s} `)
        setampm(ampmy)
        setdate(`${d} - ${(mn + 1)} - ${y}`)
    }
    setInterval(myclock, 1000)

    // // alarm feature
    // // it only works for current day


    let src = "https://cdn.pixabay.com/download/audio/2022/11/25/audio_fb45cd67b0.mp3?filename=kirby-alarm-clock-127079.mp3";
    const currentsong = useRef()
    let intervalId = useRef(null)
    
    const alarmSet = () => {
        intervalId.current = setInterval(
            () => {
                setalarmBtnText(true);
                let currenttime
                let alarmtime
                let t = new Date();
                // let d = t.getDate()
                // let mn = t.getMonth()
                // let y = t.getFullYear()
                let h = `0-${alarmHr}`;
                let m = alarmMin;
                let s = alarmSec;
                let h1 = (12 - (t.getHours()));
                let m1 = t.getMinutes();
                let s1 = t.getSeconds();
                let ampmy = (t.getHours()) < 12 ? 'AM' : 'PM';
                if (h < 0) {
                    h = h * -1;
                } else if (h == 0) {
                    h = 12;
                } else {
                    h = h;
                }
                currenttime = `${(h < 10) ? "0" + h : h} :${(m < 10) ? "0" + m : m} :${(s < 10) ? "0" + s : s} ${ampmy}`
                alarmtime = `${(h1 < 10) ? "0" + h1 : h1} :${(m1 < 10) ? "0" + m1 : m1} :${(s1 < 10) ? "0" + s1 : s1} ${alarmAMPM}`
                
                // setdate(`${d} - ${(mn + 1)} - ${y}`)
                // console.log(`alarmis set for ${currenttime} , ${alarmtime}`)
                if (currenttime == alarmtime) {
                    currentsong.current.play();
                }
            }
            , 1000)
    }

    const alarmClear = () => {
        setalarmBtnText(false)
        clearInterval(intervalId.current)
        currentsong.current.pause();
    }

    return (
        <>
            <Navbar />
            {!clockSetting && <div className="clock-body flex-column-center">
                {/* Button trigger modal  */}
                <div className="flex-column-center dial1 cursor" title="click to open menu" onClick={() => setclockSetting(true)}>
                    <div className="flex-row-center">
                        <div id="ghari">{time}</div>
                        <div id="AMPM">{ampm}</div>
                    </div>
                    <div id="day">{date}</div>
                </div>
                <audio src={src} loop={true} ref={currentsong} crossOrigin={'anonymous'}></audio>
            </div>}
            {/* Modal  */}

            {clockSetting &&
                <div className='clocksettingmenu modal-bg2'>
                    <div>
                        <div className="modal-bg1 flex-row-center">
                            <div></div>
                            <h1>Menu</h1>
                            <button type="button" title='close menu' onClick={() => setclockSetting(false)} className='closeButton'>X</button>
                        </div>
                        <div className="flex-column-center modal-bg3">
                            {/* modal-body  */}

                            <select className='selectalarm cursor' id='alarmhrs'onChange={(e) => setalarmHr(e.target.value)}>
                                {hrsOptions.map((option) => { return <option value={option} key={option}>{option}</option> })}
                            </select>

                            <select className='selectalarm cursor' id='alarmmins' onChange={(e) => setalarmMin(e.target.value)}>
                                {minOptions.map((option) => { return <option value={option} key={option}>{option}</option> })}
                            </select>

                            <select className='selectalarm cursor' id='alarmsecs'onChange={(e) => setalarmSec(e.target.value)}>
                                {minOptions.map((option) => { return <option value={option} key={option}>{option}</option> })}
                            </select>

                            <select className='selectalarm cursor' id="ampm" onChange={(e)=>setalarmAMPM(e.target.value)}>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                            <button className="buttonalarm" type="button" id='setButton' onClick={alarmSet}>Set Alarm</button>

                            <button className="buttonalarm" type="button" id='clearButton' onClick={alarmClear}><b>STOP
                                ALARM</b></button>
                            <button className="buttonalarm" type="button" onClick={()=>alert("wallpaper change feature in progress")}>Change
                                wallpaper</button>
                        </div>
                    </div>
                    {/* modal ends  */}
                </div>
            }
        </>
    )
}

export default AlarmClock