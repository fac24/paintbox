// firstly importing the multer and next connect
import nextConnect from "next-connect";
import multer from "multer";

// storing the images in the upload file and getting the original name.
const upload = multer({
  // firstly define the storage
  storage: multer.diskStorage({
    // whenever anything is pushed uploaded(art) it will be placed as public
    destination: "./public/uploads",
    //obtaining the original file name from the uploaded file
    filname: (req, file, cb) => cb(null, file.originalname),
  }),
});
