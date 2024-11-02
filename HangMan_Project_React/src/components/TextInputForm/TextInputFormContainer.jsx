import TextInputForm from "./TextInputForm";

function TextInputFormContainer() {
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
    };

    function handleTextInputChange(event) {
        console.log("Text input chnage");
        console.log(event.target.value);
    }

    return (
        <TextInputForm 
            handleFormSubmit={handleFormSubmit} 
            handleTextInputChange={handleTextInputChange}
        />
    );
}

export default TextInputFormContainer;