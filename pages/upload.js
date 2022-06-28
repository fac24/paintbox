import StyledDiv from "../components/styled-components/StyledDiv";
import StyledSubmitButton from "../components/styled-components/StyledSubmitButton";
import UploadForm from "../components/upload/UploadForm";

function Upload() {
  return (
    <section>
      <h2>Upload your art and share your feelings!</h2>
      <p>
        You can share your creations and your feellings with the community or
        you can store them in your MentArt Journal.
      </p>
      <StyledDiv>
        <UploadForm />
        <StyledSubmitButton>Submit</StyledSubmitButton>
      </StyledDiv>
    </section>
  );
}

export default Upload;
