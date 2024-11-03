import { Link, useLocation } from "react-router-dom";

function PlayGame() {

    // let [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"))

    // let { text } = useParams();

    const { state } = useLocation();

    return (
        <>
            <h1>Play Game { state.wordSelected } </h1>
            <Link to="/start" className="text-blue-500">Start Game Link</Link>
        </>
    )
}

export default PlayGame;