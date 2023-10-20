import multer, { diskStorage } from "multer";
import { extname } from "path";

export default multer({
  storage: diskStorage({
    destination: (req, file, cb) => {
      // Specify the directory where you want to store uploaded files
      cb(null, "path/to/your/upload/directory");
    },
    filename: (req, file, cb) => {
      // You can customize the filename as needed
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    let ext = extname(file.originalname.toLowerCase());
    if (
      ext !== ".jpg" &&
      ext !== ".jpeg" &&
      ext !== ".png" &&
      ext !== ".gif" &&
      ext !== ".webp" &&
      ext !== ".avif"
    ) {
      cb(
        new Error(
          "That image type isn't supported. Try uploading a .jpg or .png for example"
        ),
        false
      );
      return;
    }
    cb(null, true);
  },
});