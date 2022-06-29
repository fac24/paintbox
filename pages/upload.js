import StyledDiv from "../components/styled-components/StyledDiv";
import StyledSubmitButton from "../components/styled-components/StyledSubmitButton";
import ArtShareEmotionUpload from "../components/styled-components/ArtShareEmotionUpload";
import UploadForm from "../components/upload/UploadForm";

import { supabase } from "../utils/supabaseClient";

function Upload() {
  async function addDataHandler(inputs) {
    const { data, error } = await supabase
      .from("arts")
      .insert([
        {
          mood: inputs.mood,
          alt: inputs.alt,
          caption: inputs.caption,
          public: inputs.public,
          prompt: inputs.prompt,
          img: "",
        },
      ])
      .then((data) => {
        return data;
      });
    console.log(data);
  }

  return (
    // <section>
    <ArtShareEmotionUpload>
      <h2>Upload your art and share your feelings!</h2>
      <p>
        You can share your creations and your feelings with the community or you
        can store them in your MentArt Journal.
      </p>
      {/* </ArtShareEmotionUpload> */}
      {/* container div for the upload form wrapping over the other components */}
      <StyledDiv>
        {/* upload page component */}
        <UploadForm addData={addDataHandler} />
        {/* styled component button
        <StyledSubmitButton>Submit</StyledSubmitButton> */}
      </StyledDiv>
    </ArtShareEmotionUpload>
    // </section>
    //   <UploadForm addData={addDataHandler} />
    // </section>
  );
}

export default Upload;
