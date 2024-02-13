import React, { useState } from 'react'
import Navbar from './navbar';

const Dictionary = () => {
    const [input, setInput] = useState('');
    const [Result, setResult] = useState('');
    const [ResultImage, setResultImage] = useState('');
    const [resultbox, setresult] = useState(false);

    const searchWord = async() => {
        setresult(true)
        if (searchbar.value) {
            let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
            let imageurl = "https://source.unsplash.com/featured/200x200?"
            let imagequery = imageurl + searchbar.value
            let qwery = url + searchbar.value
            const response = await fetch(qwery);
            data = await response.json();
            console.table(data);
            let arr = data[0].word.split(" ")
            let arr2 = arr.map((n) => n.slice(0, 1).toUpperCase().concat(n.slice(1).toLowerCase()))
            soundicon.setAttribute("src", "download.png")
            soundicon.setAttribute("class", "soundicon")
            soundicon.setAttribute("alt", "pronounciation")
            soundicon.setAttribute("title", "pronounciation")
            soundicon.setAttribute("onclick", "pronounciation()")
            title.innerHTML = arr2
            title.append(soundicon)
            data[0].meanings[0].definitions.length>2 ? noun.innerText = data[0].meanings[0].definitions[0].definition + "," +
                 data[0].meanings[0].definitions[1].definition : noun.innerText = data[0].meanings[0].definitions[0].definition
            verb.innerText = data[0].meanings[0].definitions[0].definition
            let synofiller = data[0].meanings[0].synonyms.toString()
            synonyms.innerText = synofiller.split(",").map((e) => { return e.concat(" ") })
            image.setAttribute("src", imagequery)
            image.removeAttribute("class")
            displayboard.removeAttribute("class")
            displayboard.setAttribute("class", "flex")
        }
        else {
            alert("enter any text")
        }
    }

    const onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            console.log("i m working", input)
        }
    }

    const displaychange = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <Navbar />
            <div class="dictionarycontainer flex-column-center">
                <div class="dictionarybox flex-row-center">
                    <input
                        type="text"
                        value={input}
                        onChange={displaychange}
                        onKeyDown={onEnterPress}
                        placeholder="enter word"
                        className="border-transparent shadow wordsearch"
                    ></input>
                    <div className="flex-row-center wrap">
                        <button className="searchWordbtn" onClick={searchWord}>Search</button>
                        <button className="searchWordbtn"  onClick="window.location.reload()">Refresh</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dictionary