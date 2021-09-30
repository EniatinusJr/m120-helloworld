import './App.css';
import {useState} from "react";

function Bmi() {

    const [BMI, setBmi] = useState(0);
    const [Height, setHeight] = useState(0);
    const [Weight, setWeight] = useState(0);
    const [Gender, setGender] = useState("m");
    const [Age, setAge] = useState("j");
    const [evaluation, setevaluation] = useState("green");
    const [Fattness, setfattness] = useState("");


    function calcbmi(height, weight){
        return Math.round(weight / (Math.pow(height/100,2))) ;
        
    }
    function calcevo(){
        switch(Age) {
            case"j":
                if (BMI < 24 && BMI >19){ setfattness("you are normal")}
                else if (BMI > 24 ){ setfattness("you are fat")}
                else if (BMI < 19){ setfattness("you are anorexic")}
                break;
            case"s":
            case"e":
            case"g":
            case"a":
            case"p":
        }

    }




    return (
        <div className="App">
        <header className="App-header">
        <p>
            Mann<input type="radio" name="gen" onChange={ () => setGender("m")}/> <br></br>
            Frau<input type="radio" name="gen" onChange={ () => setGender("w")}/> <br></br>
            <select onChange={ (a) => { console.log(a.target.value);
                setAge(a.target.value)}}>
                <option value="j">16-24</option>
                <option value="s">25-34</option>
                <option value="e">35-44</option>
                <option value="g">45-54</option>
                <option value="a">55-64</option>
                <option value="p">65-90</option>
                </select> <br></br>
            Grösse (cm)<input type="number" onChange={(h)=> setHeight(h.target.value)}/> <br></br>
            Gewicht (kg)<input type="number" onChange={(w)=> setWeight(w.target.value)}/> <br></br>
            <button onClick={() => { setBmi(calcbmi(Height,Weight))
            setevaluation(calcevo())
            }}>Senden</button>   <br></br>
            <p>BMI: {BMI}</p> 

        </p>
        <div style={{backgroundColor: evaluation}}>{Fattness}</div>
        </header>
        </div>
    );
  
}

export default Bmi;
