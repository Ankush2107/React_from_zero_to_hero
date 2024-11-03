import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";

function PlayGame() {

    // let [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"))

    // let { text } = useParams();

    const { state } = useLocation();

    const [ guessedLetters, setGuessedLetters ] = useState([]);

    function handleLetterClick(letter) {
        setGuessedLetters([ ...guessedLetters, letter ]);
    }

    return (
        <>
            <h1>Play Game</h1>
            <MaskedText text={state.wordSelected} guessedLetters={guessedLetters} />

            <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} /> 
            <Link to="/start" className="text-blue-500">Start Game Link</Link>
        </>
    )
}

export default PlayGame;