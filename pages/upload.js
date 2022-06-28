import StyledDiv from "../components/styled-components/StyledDiv";
import StyledSubmitButton from "../components/styled-components/StyledSubmitButton";
import ArtShareEmotionUpload from "../components/styled-components/ArtShareEmotionUpload";
import UploadForm from "../components/upload/UploadForm";

function Upload() {
  return (
    // <section>
    <ArtShareEmotionUpload>
      <h2>Upload your art and share your feelings!</h2>
      <p>
        You can share your creations and your feellings with the community or
        you can store them in your MentArt Journal.
      </p>
      {/* </ArtShareEmotionUpload> */}
      {/* container div for the upload form wrapping over the other components */}
      <StyledDiv>
        {/* upload page component */}
        <UploadForm />
        {/* styled component button */}
        <StyledSubmitButton>Submit</StyledSubmitButton>
      </StyledDiv>
    </ArtShareEmotionUpload>
    // </section>
  );
}

export default Upload;
