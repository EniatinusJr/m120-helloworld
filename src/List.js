import './App.css';
import {useState} from "react";
import {SketchPicker} from "react-color";

export default function List(){
    const data = [
        { title: 'red', red: 255, green: 0, blue: 0 },
        { title: 'green', red: 0, green: 255, blue: 0 },
        { title: 'blue', red: 0, green: 0, blue: 255 }
    ]
    const [colors, setColors] = useState(data)
    const [newColor, setNewcolor] = useState("")
    const [newTitle, setNewtitle] = useState("")
    const [newRed, setNewred] = useState(0)
    const [newGreen, setNewgreen] = useState(0)
    const [newBlue, setNewblue] = useState(0)

    function addData(){
        setNewred(Math.floor(newRed))
        setNewgreen(Math.floor(newGreen))
        setNewblue(Math.floor(newBlue))

        setColors([...colors, {title: newTitle, red: newRed, green: newGreen, blue: newBlue}])
    }

    return (
        <div className="App">
            <header className="App-header">
                <ul>
                    <li>red</li>
                    <li>green</li>
                    <li>blue</li>
                </ul>
                <ul>
                    { colors.map( (color, idx) => <li key={idx}>{color.title +" ("+color.red+","+color.green+","+color.blue+")"}</li>) }
                </ul>
                <input type={"text"} value={newTitle} onChange={ (e) => setNewtitle(e.target.value)}/>
                <input type={"text"} value={newRed} onChange={ (e) => setNewred(e.target.value)}/>
                <input type={"text"} value={newGreen} onChange={ (e) => setNewgreen(e.target.value)}/>
                <input type={"text"} value={newBlue} onChange={ (e) => setNewblue(e.target.value)}/>
                <button onClick={ () => addData()}>add color</button>

                <SketchPicker onChangeComplete={ (c) => {
                    console.log(c)
                    setColors([...colors, {title: 'picker', red: c.rgb.r, green: c.rgb.g, blue: c.rgb.b}])
                    }}/>

                {/*}
                <input type={"text"} value={newColor} onChange={ (e) => setNewcolor(e.target.value)}/>
                <button onClick={ () => {
                    console.log(newColor)
                    setColors([...colors, newColor])
                     }}>add color</button>
                */}
                {/*<ul>
                    { colors.map( (color, idx) => <li key={color-+idx}>{color}</li>) }
                </ul>
                <h1>List Example 1</h1>
                <ul>
                    { colors.map((color,idx) => <li key={'color-'+idx}>{color}</li>) }
                </ul>*/}
            </header>
        </div>
    )
}