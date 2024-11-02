import TextInput from "./components/TextInput/TextInput"

function App() {
  return (
    <div>
      <TextInput 
        label={"Enter some text"}
        placeholder={"Enter some text here..."}
        onChangeHandler={(e) => console.log(e.target.value)}
      />
    </div>
  )
}

export default App
