import React, { useState, useRef, useEffect } from 'react'
import ModalPortal from '../ModalPortal'

const AlarmClock = () => {
    const [clockSetting, setclockSetting] = useState(false)
    const [clockwallpaper, setclockwallpaper] = useState("https://source.unsplash.com/featured/1600x900")
    const [alarmON, setalarmON] = useState(false)
    const [time, settime] = useState("Fetching time")
    const [alarmMin, setalarmMin] = useState(0)
    const [alarmSec, setalarmSec] = useState(0)
    const [alarmHr, setalarmHr] = useState(1)
    const [alarmAMPM, setalarmAMPM] = useState("AM")
    const [ampm, setampm] = useState("")
    const [date, setdate] = useState("")
    const currentsong = useRef()
    let intervalId = useRef()
    let src = "https://cdn.pixabay.com/download/audio/2022/11/25/audio_fb45cd67b0.mp3?filename=kirby-alarm-clock-127079.mp3";
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

    const alarmSet = () => {
        setalarmON(true)
        let currenttime
        let alarmtime
        intervalId.current = setInterval(
            () => {

                let t = new Date();
                // let d = t.getDate()
                // let mn = t.getMonth()
                // let y = t.getFullYear()
                let h = alarmHr;
                let m = alarmMin;
                let s = alarmSec;
                let h1 = (12 - (t.getHours()));
                let m1 = t.getMinutes();
                let s1 = t.getSeconds();
                let ampmy = (t.getHours()) < 12 ? 'AM' : 'PM';
                if (h1 < 0) {
                    h1 = h1 * -1;
                } else if (h1 == 0) {
                    h1 = 12;
                } else {
                    h1 = h1;
                }
                if (h < 0) {
                    h = h * -1;
                } else if (h == 0) {
                    h = 12;
                } else {
                    h = h;
                }
                alarmtime = `${(h < 10) ? "0" + h : h} :${(m < 10) ? "0" + m : m} :${(s < 10) ? "0" + s : s} ${alarmAMPM}`
                currenttime = `${(h1 < 10) ? "0" + h1 : h1} :${(m1 < 10) ? "0" + m1 : m1} :${(s1 < 10) ? "0" + s1 : s1} ${ampmy}`

                // setdate(`${d} - ${(mn + 1)} - ${y}`)
                // console.log(`alarmis set for current time -  ${currenttime} , alarm time - ${alarmtime}`)
                if (currenttime == alarmtime) {
                    currentsong.current ? currentsong.current.play() : console.log("unable to fetch audio");
                }
            }
            , 1000)
    }

    const alarmClear = () => {
        setalarmON(false)
        currentsong.current ? currentsong.current.pause() : console.log("unable to fetch audio");
        clearInterval(intervalId.current)
    }

    const wallpaperChange = async () => {
        const response = await fetch("https://source.unsplash.com/featured/1600x900");
        setclockwallpaper(response.url)
    }

    const handleResize = () => {
        window.innerWidth > 400 ? setclockwallpaper("https://source.unsplash.com/featured/1600x900") : setclockwallpaper("https://source.unsplash.com/featured/700x1600")
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
            <audio src={src} loop={true} ref={currentsong} crossOrigin={'anonymous'}></audio>
            {!clockSetting &&
                <div className="clock-body smooth-entry flex flex-col justify-center items-center">
                    {/* Button trigger modal  */}
                    <div className="flex flex-col justify-center mb-2 bg-blue-100 items-center dial1 cursor md:mt-0 mt-10" title="click to open menu" onClick={() => setclockSetting(true)}>
                        <div className="flex justify-center items-center h-[25vh]">
                            <div className="md:text-[100px] text-4xl text-center font-bold">{time}</div>
                            <div className="md:text-[100px] text-4xl text-center font-bold mx-[10px]">{ampm}</div>
                        </div>
                        <div className="md:text-[50px] text-2xl p-4 text-center md:w-[50vw] w-[70vw]">{date}</div>
                    </div>
                </div>}
            {/* Modal  */}

            {clockSetting &&
                <ModalPortal>
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center">


                        <div
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            onClick={() => setclockSetting(false)}
                        />


                        <div
                            className="
          relative z-[10001]
          w-[90%] max-w-md
          bg-white
          rounded-2xl
          shadow-2xl
          p-6
          animate-modal-in
        "
                        >

                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    Set Alarm
                                </h2>

                                <button
                                    className="text-gray-500 hover:text-red-500 text-xl font-bold"
                                    onClick={() => setclockSetting(false)}
                                    title="Close"
                                >
                                    x
                                </button>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                                <select
                                    className="border rounded-lg p-2 text-center text-sm"
                                    value={alarmHr}
                                    onChange={(e) => setalarmHr(e.target.value)}
                                >
                                    {hrsOptions.map((h) => (
                                        <option key={h} value={h}>
                                            {h.toString().padStart(2, "0")}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    className="border rounded-lg p-2 text-center text-sm"
                                    value={alarmMin}
                                    onChange={(e) => setalarmMin(e.target.value)}
                                >
                                    {minOptions.map((m) => (
                                        <option key={m} value={m}>
                                            {m.toString().padStart(2, "0")}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    className="border rounded-lg p-2 text-center text-sm"
                                    value={alarmSec}
                                    onChange={(e) => setalarmSec(e.target.value)}
                                >
                                    {minOptions.map((s) => (
                                        <option key={s} value={s}>
                                            {s.toString().padStart(2, "0")}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    className="border rounded-lg p-2 text-center text-sm"
                                    value={alarmAMPM}
                                    onChange={(e) => setalarmAMPM(e.target.value)}
                                >
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>

                            {/* Action */}
                            <button
                                className="
            w-full py-2 rounded-xl
            bg-blue-600 text-white font-medium
            hover:bg-blue-700 transition
          "
                                onClick={alarmON ? alarmClear : alarmSet}
                            >
                                {alarmON ? "STOP ALARM" : "SET ALARM"}
                            </button>
                        </div>
                    </div>
                </ModalPortal>
            }
        </>
    )
}

export default AlarmClock