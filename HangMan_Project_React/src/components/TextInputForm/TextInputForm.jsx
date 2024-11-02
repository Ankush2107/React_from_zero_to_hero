import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm() {

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted");
    };

    function handleTextInputChange(event) {
        console.log("Text input chnage");
        console.log(event.target.value);
    }

    return (
        <form onSubmit={handleFormSubmit}> 
            <div>
                <TextInput
                    label="Enter a word or a phrase"
                    placeholder="Enter a word or a phrase here..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    styleType="warning"
                    text="Show / hide"
                />
            </div>
            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
        </form>
    )
};

export default TextInputForm;