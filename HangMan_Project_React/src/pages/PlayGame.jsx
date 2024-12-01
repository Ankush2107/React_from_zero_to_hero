import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState } from "react";
import HangMan from "../components/HangMan/HangMan";
import { WordContext } from "../context/WordContext";

function PlayGame() {

    // let [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"))

    // let { text } = useParams();

    // const { state } = useLocation();

    const { word } = useContext(WordContext);

    const [ guessedLetters, setGuessedLetters ] = useState([]);
    const [ step, setStep ] = useState(0);

    function handleLetterClick(letter) {
        if(word?.toUpperCase().includes(letter)) {
            console.log("Correct");
        } else {
            console.log("wrong");
            setStep(step + 1);
        }
        setGuessedLetters([ ...guessedLetters, letter ]);
    }

    return (
        <>
            <h1>Play Game</h1>
            {word && (
                <>
                    <MaskedText text={word} guessedLetters={guessedLetters} />
                    <div>
                        <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} /> 
                    </div>
                    <div>
                        <HangMan step={step} />
                    </div>
                </>
            )}
            <Link to="/">Home</Link>
            <Link to="/start" className="text-blue-500">Start Game Link</Link>
        </>
    ) 
}

export default PlayGame;