import { Link, useParams } from "react-router-dom";

function PlayGame() {

    // let [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"))

    let { text } = useParams();

    return (
        <>
            <h1>Play Game {text}</h1>
            <Link to="/start" className="text-blue-500">Start Game Link</Link>
        </>
    )
}

export default PlayGame;