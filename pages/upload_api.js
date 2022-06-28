// // firstly importing the multer and next connect
// import nextConnect from "next-connect";
// import multer from "multer";

// // storing the images in the upload file and getting the original name.
// const upload = multer({
//   // firstly define the storage
//   storage: multer.diskStorage({
//     // whenever anything is pushed uploaded(art) it will be placed as public
//     destination: "./public/uploads",
//     //obtaining the original file name from the uploaded file
//     filname: (req, file, cb) => cb(null, file.originalname),
//   }),
// });

// // using next connect and helping us handle the requests that are sent.

// const apiRoute = nextConnect({
//   //creating an error message if theres an error the file cannot be found, only one file at a time.
//   // only jpegs.
//   onError(error, req, res) {
//     res.status(501).json({ error: `oopsie something does not compute` });
//   },
// });

// // uploading a single file.
// apiRoute.use(upload.single("artUpload"));

// // now we need to post method to send and post the art.
// apiRoute.post((req, res) => {
//   res.status(200).json({ data: "yaaaay congrats it worked" });
// });

// export default apiRoute;

// // so that the body parser isn't posted on the page.
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
