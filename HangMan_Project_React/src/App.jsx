import { Route, Routes } from "react-router-dom";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";

function App() {
  return (
    <Routes>
      <Route path="/start" element={<StartGame/>} />
      <Route path="/play/:text" element={<PlayGame/>} />
      <Route path="/" element={<div>Home</div>} />
    </Routes>
  )
}

export default App
