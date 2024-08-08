import { useState } from 'react';

export const NameCheck = ({onSendData}) => {
    const [isFirstQuestion, setIsFirstQuestion] = useState(true);
    const [name, setName] = useState("");
    const [isIncorrectName, setIsIncorrectName] = useState(null);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const firstQuestionClicked = () => {
        setIsFirstQuestion(false);
        if (name.toLowerCase() != "farhana") {
            setIsIncorrectName(true);
        }
        else {
            setIsIncorrectName(false);
            console.log('name in child: ', name);
            onSendData(name);
        }
    }

    return (
        <div >
            {isFirstQuestion &&
                <div className="container">
                    <div className="text-center">
                        <h1>Whats your name??</h1>
                        <input
                            type="text"
                            onChange={handleChange}
                            className="input"
                        />
                        <button onClick={firstQuestionClicked} className="button">Submit</button>
                    </div>
                </div>
            }
            {isIncorrectName && <div class="firstQuestion">
                <h1>This was not made for you ...</h1>
            </div>
            }

        </div>
    );
}
