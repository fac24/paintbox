import { useRef, useState } from "react";
import styled from "styled-components";
import StyledDiv from "../styled-components/StyledDiv";
import StyledSubmitButton from "../styled-components/StyledSubmitButton";
import ArtUploadImage from "../styled-components/ArtUploadImage";
import React from "react";
import { render } from "react-dom";

function UploadForm(props) {
  const [imageSrc, setImageSrc] = useState("");

  const artInput = useRef();
  const moodInput = useRef();
  const descriptionInput = useRef();
  const visibilityInput = useRef();
  const promptInput = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const selectedArt = artInput.current.files[0];
    const enteredMood = moodInput.current.value.toLowerCase();
    const enteredDescription = descriptionInput.current.value;
    const checkedVisibility = visibilityInput.current.checked;
    const checkedPrompt = promptInput.current.checked;
    const altText = `art representing the mood ${enteredMood}`;

    const formData = new FormData();
    formData.append("file", selectedArt);
    formData.append("upload_preset", "paintbox");

    const cloudinary = await fetch(
      "https://api.cloudinary.com/v1_1/du8mr1tpj/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((response) => response.json());

    setImageSrc(cloudinary.secure_url);

    const inputArtData = {
      mood: enteredMood,
      alt: altText,
      caption: enteredDescription,
      public: checkedVisibility,
      prompt: checkedPrompt,
      img: cloudinary.secure_url,
    };

    props.addArtData(inputArtData);
  }

  function previewHandler(display) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
    };

    reader.readAsDataURL(display.target.files[0]);
  }

  return (
    <StyledDiv>
      <form onSubmit={submitHandler}>
        <div>
          <Label htmlFor="art">
            Select the piece of art you would like to share
          </Label>
          <UploadArtInput
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

        <SettingMoodDiv>
          <Label htmlFor="mood">Set your mood:</Label>
          <Input type="text" id="mood" name="mood" ref={moodInput} required />
        </SettingMoodDiv>

        <div>
          <Label htmlFor="description">Describe your feelings:</Label>
          <DescriptionOfMoodFeeling
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
          <Label htmlFor="visibility">
            Set the visibility of your upload PUBLIC
          </Label>
        </div>

        <div>
          <UploadArtInput
            type="checkbox"
            id="prompt"
            name="prompt"
            value="true"
            ref={promptInput}
          />
          <Label htmlFor="prompt">
            This art was inspired by the weekly prompt
          </Label>
        </div>
        <StyledSubmitButton>Submit</StyledSubmitButton>
      </form>
    </StyledDiv>
  );
}

export default UploadForm;

const SettingMoodDiv = styled.div`
  margin: 2%;
`;

const UploadArtInput = styled.input`
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  border-radius: 5px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 5px;
  border: 5px solid var(--deep-soothing-ocean);
  text-align: center;
  background-color: var(--lilly-lilac);
  cursor: pointer;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: var(--aubergine-purple);
  background: var(--lilly-lilac);
  border: 5px solid var(--deep-soothing-ocean);s
  border-radius: 10px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1%;
`;

const DescriptionOfMoodFeeling = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.5em;
  margin-left: auto;
  margin-right: auto;
  color: var(--aubergine-purple);
  background: var(--lilly-lilac);
  border: 5px solid var(--deep-soothing-ocean);
  border-radius: 10px;
`;
