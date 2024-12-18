import { Link } from "react-router-dom"
import Button from "../components/Button/Button"
import { useContext, useEffect } from "react"
import { WordContext } from "../context/WordContext";

function Home() {

    const { setWordList, setWord } = useContext(WordContext);

    async function fetchWords() {
        const response = await fetch('http://localhost:3000/words');
        const data = await response.json();
        // console.log(data);
        setWordList([...data])
        const randomIndex = Math.floor(Math.random() * data.length);
        // console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue)
    }

    useEffect(() => {
        fetchWords();
    }, [])

  return (
    <>
        <Link to="/play" >
            <Button text="Single Player"  />
        </Link> 
        <br />
        <Link to="/start" >
            <div className="mt-4">
                <Button styleType="secondary" text="Multi player"/>
            </div>
        </Link>
    </>
  )
}

export default Home
