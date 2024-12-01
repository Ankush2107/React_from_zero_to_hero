import { Link } from "react-router-dom"
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import "./StartGame.css"

function StartGame() {
  return (
    <div className="container">
      <h1 className="heading">Start Game</h1> 
      <TextInputFormContainer/>
      <Link to="/play" className="text-blue-500">Play Game Link</Link>
    </div>
  )
}

export default StartGame
