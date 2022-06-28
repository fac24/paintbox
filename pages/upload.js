import UploadForm from "../components/upload/UploadForm";

function Upload() {
  async function addDataHandler(inputs) {
    console.log(inputs);
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
