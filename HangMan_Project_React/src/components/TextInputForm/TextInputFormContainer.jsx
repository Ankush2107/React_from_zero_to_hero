import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {
    
    let [ inputType, setInputType ] = useState("password")
    let [ value, setValue ] = useState("");

    let navigate = useNavigate();

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted", value);
        if(value) {
            // if we have something in value then we want to go to the play page.
            navigate("/play");
        }
    };

    function handleTextInputChange(event) {
        console.log("Text input chnage");
        console.log(event.target.value);
        setValue(event.target.value);
    };

    function handleShowHideClick() {
        console.log("Show hide button was clicked");
        
        if(inputType === "password") {
            setInputType("text");
        } else {
            setInputType("password");
        }

        console.log(inputType);
    };

    return (
        <TextInputForm 
            inputType={inputType}
            handleFormSubmit={handleFormSubmit} 
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    );
}

export default TextInputFormContainer;