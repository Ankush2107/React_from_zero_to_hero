import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame() {

    // let [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"))

    // let { text } = useParams();

    const { state } = useLocation();

    return (
        <>
            <h1>Play Game</h1>
            <MaskedText text={state.wordSelected} guessedLetters={[]} />
            <Link to="/start" className="text-blue-500">Start Game Link</Link>
        </>
    )
}

export default PlayGame;