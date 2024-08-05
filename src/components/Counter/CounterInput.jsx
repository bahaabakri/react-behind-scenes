
import {useState} from "react";
import { log } from '../../log.js';
export default function CounterInput({handleSetClick}) {

    log('<CounterInput /> rendered', 2);
    const [enteredNumber, setEnteredNumber] = useState(0);

    function handleChange(event) {
        setEnteredNumber(+event.target.value);
      }

    function onSetCounter() {
        setEnteredNumber(0);
        handleSetClick(enteredNumber)
    }
    return  (
        <section id="configure-counter">
            <h2>Set Counter</h2>
            <input type="number" onChange={handleChange} value={enteredNumber} />
            <button onClick={onSetCounter}>Set</button>
        </section>
    )       

}