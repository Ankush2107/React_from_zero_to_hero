import { Link, useSearchParams } from "react-router-dom";

function PlayGame() {

    let [searchParams] = useSearchParams();
    console.log(searchParams.get("text"))

    return (
        <>
            <h1>Play Game</h1>
            <Link to="/start" className="text-blue-500">Start Game Link</Link>
        </>
    )
}

export default PlayGame;