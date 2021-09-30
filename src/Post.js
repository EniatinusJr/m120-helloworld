import './App.css';
import {useState} from "react";

export default function Post(){
    const [Username, setUsername] = useState("");
    const [Message, setMessage] = useState("");
    const [Nickname, setNickname] = useState("");
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);



    return (
        <div className="App">
            <header className="App-header">

                Name:
                <input type="text" onChange={(a) => setUsername(a.target.value)}/>
                Message:
                <input type="text" onChange={(a) => setMessage(a.target.value)}/>
                <select onChange={(a) => setNickname(a.target.value)}>
                <option value="nickname" default selected disabled>Nickname</option>
                <option value="User">User</option>
                <option value="CoolerUser">Cooler User</option>

                </select>

                <input type="submit" value="select" onClick={(a) => {
                    console.log(Username);
                    console.log(Message);
                    console.log(Nickname);
                }}
                />
                <input type="checkbox" name="cheky1" checked={checkbox1} onChange={() => setCheckbox1 = !checkbox1} />
                <input type="checkbox" name="cheky2" checked={checkbox2} onChange={() => setCheckbox2 = !checkbox2} />
                <input type="checkbox" name="cheky3" checked={checkbox3} onChange={() => setCheckbox3 = !checkbox3} />

            </header>
        </div>
    );
}