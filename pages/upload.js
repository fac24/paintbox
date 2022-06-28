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
    <section>
      <h2>Upload your art and share your feelings!</h2>
      <p>
        You can share your creations and your feelings with the community or you
        can store them in your MentArt Journal.
      </p>
      <UploadForm addData={addDataHandler} />
    </section>
  );
}
export default Upload;
