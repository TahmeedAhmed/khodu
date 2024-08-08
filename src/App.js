import logo from './logo.svg';
import { useState } from 'react';
import { NameCheck } from './NameCheck';
import './App.css';
import { Welcome } from './Welcome';
import { AskQuestion } from './AskQuestion';
import me from './me.jpg'



const App = () => {
  const [isValidName, setIsValidName] = useState("what");

  const [nextButtonClicked, setNextButtonClicked] = useState(false);

  const getName = (data) => {
    // data === "farhana" ?  setIsValidName("farhana") :  setIsValidName("");
    setIsValidName(data);
  };

  const nextButtonClickedfunc = () => {
    setIsValidName(false);
    setNextButtonClicked(true);
  }

  return (
    <div className="App">
     <NameCheck onSendData={getName}/>
     {(isValidName === "farhana" || isValidName === "Farhana") && <Welcome value="Welcome" />}
     {(isValidName === "farhana" || isValidName === "Farhana") &&  <Welcome value={isValidName} delay={true}/>}
     
     {(isValidName === "farhana" || isValidName === "Farhana") &&  <button className='animation-wait' onClick={nextButtonClickedfunc}>Next</button>}

     {nextButtonClicked && <AskQuestion /> }
  
    </div>
  );
}

export default App;
