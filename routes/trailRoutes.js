import { Router } from "express";
import multer from "multer"; // Import multer
import {
  getAllTrails,
  createTrail,
  getTrailById,
  getUpdate,
  putTrail,
  deleteTrail,
} from "../controllers/trailController.js";
import { ensureAuth, ensureGuest } from "../middleware/authMiddleware.js";

const router = Router();

// Create a multer storage instance
const storage = multer.diskStorage({
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
});

const upload = multer({ storage });

router.get("/", getAllTrails);
router.post("/createTrail", ensureAuth, upload.single("file"), createTrail); // Use upload.single
router.get("/:id", getTrailById);
router.put("/:id", putTrail);
router.get("/updateTrail/:id", ensureAuth, getUpdate);
router.put("/updateTrail/:id", ensureAuth, putTrail);
router.delete("/deleteTrail/:id", ensureAuth, deleteTrail);

export default router;