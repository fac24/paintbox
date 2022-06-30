import StyledDiv from "../styled-components/StyledDiv";
import StyledSubmitButton from "../styled-components/StyledSubmitButton";
import { useRef, useState } from "react";
import ArtUploadImage from "../styled-components/ArtUploadImage";
import Image from "next/image";

function UploadForm(props) {
  const [imageSrc, setImageSrc] = useState("");

  const artInput = useRef();
  const moodInput = useRef();
  const descriptionInput = useRef();
  const visibilityInput = useRef();
  const promptInput = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const selectedArt = artInput.current.value;
    const enteredMood = moodInput.current.value;
    const enteredDescription = descriptionInput.current.value;
    const checkedVisibility = visibilityInput.current.checked;
    const checkedPrompt = promptInput.current.checked;
    const altText = `art representing the mood ${enteredMood}`;

    //console.log(artInput.current.files);

    const cloudinaryData = {
      file: artInput.current.files[0],
      upload_preset: "paintbox",
    };

    const formData = new FormData();
    formData.append("file", artInput.current.files[0]);
    formData.append("upload_preset", "paintbox");

    const cloudinary = await fetch(
      "https://api.cloudinary.com/v1_1/du8mr1tpj/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((response) => response.json());

    console.log(cloudinary);

    setImageSrc(cloudinary.secure_url);

    const inputData = {
      mood: enteredMood,
      alt: altText,
      caption: enteredDescription,
      public: checkedVisibility,
      prompt: checkedPrompt,
      img: cloudinary.secure_url,
    };

    //props.addData(inputData);
  }

  function previewHandler(display) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
    };

    reader.readAsDataURL(display.target.files[0]);
    console.log(reader);
  }

  return (
    <StyledDiv>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="art">
            Select the piece of art you would like to share
          </label>
          <input
            type="file"
            id="art"
            name="art"
            accept="image/png, image/jpeg, image/jpg"
            ref={artInput}
            onChange={previewHandler}
            required
          />
          <p>Preview:</p>
          <ArtUploadImage
            src={imageSrc}
            alt="preview uploaded image"
            width={200}
            height={200}
          />
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
            id="visibility"
            name="visibility"
            value="true"
            ref={visibilityInput}
          />
          <label htmlFor="visibility">
            Set the visibility of your upload PUBLIC
          </label>
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
}

export default UploadForm;
