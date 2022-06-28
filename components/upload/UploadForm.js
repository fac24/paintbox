import styled from "styled-components";

const UploadForm = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="art">
            Select the piece of art you would like to share
          </label>
          <input type="file" id="art" name="art" required />
        </div>

        <div>
          <label htmlFor="mood">Set your mood:</label>
          <input type="text" id="mood" name="mood" required />
        </div>

        <div>
          <label htmlFor="description">Describe your feelings:</label>
          <textarea rows="5" id="description" name="description" required />
        </div>

        <div>
          <input
            type="checkbox"
            id="visibility"
            name="visibility"
            value="true"
          />
          <label htmlFor="visibility">
            Set the visibility of your upload PUBLIC
          </label>
        </div>

        <div>
          <input type="checkbox" id="prompt" name="prompt" value="true" />
          <label htmlFor="prompt">
            This art was inspired by the weekly prompt
          </label>
        </div>

        <button type="button">Submit</button>
      </form>
    </div>
  );
};

// const IndexPage = () => {
//   return (
//     <>
//       <Head>
//         <title>How to Crop and Resize Image in the Browser</title>
//         <link rel="icon" href="/favicon.ico" />
//         <meta charSet="utf-8" />
//         <script
//           src="https://widget.Cloudinary.com/v2.0/global/all.js"
//           type="text/javascript"
//         ></script>
//       </Head>
//       <div className="main">
//           [...]
//       </div>
//     </>
//   );
// }

export default UploadForm;
