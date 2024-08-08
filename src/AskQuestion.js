import { useState } from 'react';
import imagee from './me.jpg'
import skull from './skull.jpeg'

export const AskQuestion = () => {

    const [whichClicked, setWhichClicked] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    const yesClicked = () => {
        setButtonClicked(true);
        setWhichClicked("yes");
    }

    const noClicked = () => {
        setButtonClicked(true);
        setWhichClicked("no");
    }

    return (
        <div class="">
            {buttonClicked === false && <h1>Tahmeed & Farhana always??</h1>}
            {buttonClicked === false && <button onClick={yesClicked}>yes</button> }
            {buttonClicked === false && <button onClick={noClicked}>no</button>}
            
            {whichClicked === "yes" && <img src={imagee} width="500" height="600" alt='gha' />}
            {whichClicked === "no" && <img src={skull} width="500" height="600" alt='gha' />}
            
        </div>
    );
}

