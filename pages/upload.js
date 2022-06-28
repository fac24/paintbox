import UploadForm from "../components/upload/UploadForm";
// import IndexPage from "../components/upload/UploadForm";
// import React, { useState } from "react";
// import Head from "next/head";

function Upload() {
  return (
    <section>
      <h2>Upload your art and share your feelings!</h2>
      <p>
        You can share your creations and your feellings with the community or
        you can store them in your MentArt Journal.
      </p>
      <UploadForm />
      {/* <IndexPage /> */}
    </section>
  );
}

export default Upload;
// export default Upload;
