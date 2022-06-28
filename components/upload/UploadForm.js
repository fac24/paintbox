import StyledDiv from "../styled-components/StyledDiv";
import StyledSubmitButton from "../styled-components/StyledSubmitButton";
import { useRef } from "react";

function UploadForm(props) {
  const artInput = useRef();
  const moodInput = useRef();
  const descriptionInput = useRef();
  const visibilityInput = useRef();
  const promptInput = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedArt = artInput.current.value;
    const enteredMood = moodInput.current.value;
    const enteredDescription = descriptionInput.current.value;
    const checkedVisibility = visibilityInput.current.checked;
    const checkedPrompt = promptInput.current.checked;
    const altText = `art representing the mood ${enteredMood}`;

    const inputData = {
      mood: enteredMood,
      alt: altText,
      caption: enteredDescription,
      public: checkedVisibility,
      prompt: checkedPrompt,
      img: selectedArt,
    };

    props.addData(inputData);
  }

  return (
    <StyledDiv>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="art">
            Select the piece of art you would like to share
          </label>
          <input type="file" id="art" name="art" ref={artInput} required />
        </div>

        <div>
          <label htmlFor="mood">Set your mood:</label>
          <input type="text" id="mood" name="mood" ref={moodInput} required />
        </div>

        <div>
          <label htmlFor="description">Describe your feelings:</label>
          <textarea
            rows="5"
            id="description"
            name="description"
            ref={descriptionInput}
            required
          />
        </div>

        <div>
          <input
            type="checkbox"
            id="prompt"
            name="prompt"
            value="true"
            ref={promptInput}
          />
          <label htmlFor="prompt">
            This art was inspired by the weekly prompt
          </label>
        </div>
        {/* styled component button */}
        <StyledSubmitButton>Submit</StyledSubmitButton>
      </form>
    </StyledDiv>
  );
};

export default UploadForm;
