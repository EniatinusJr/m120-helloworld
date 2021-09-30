import './App.css';
import {useState} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Apicalls(){
    const [inputword, setInputword] = useState("");
    const [outputwords, setOutputwords] = useState([]);

    function callApi(){
        fetch('https://api.datamuse.com/words?rel_rhy='+ inputword)
            .then(response => response.json())
            .then(data => setOutputwords(data.map( (wordObject => wordObject.word))))
            .catch((error) => {
            console.error('Error:', error);
        });
        console.log(outputwords);
    }

    return (
        <div className="App">
            <header className="App-header">
                <input type="text" value={inputword} onChange={ (e) => setInputword(e.target.value)} />

                <button onClick={ (e) => callApi()}>Search</button>
                <ListGroup>
                    {outputwords.map( (word, idx) => <li>{word}</li>)}
                </ListGroup>
            </header>
        </div>
    )
}