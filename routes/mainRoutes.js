import express from "express";
const router = express.Router(); // Use express.Router() to create a router instance
import { getLogin, postLogin, logout, getSignup, postSignup } from "../controllers/authController.js";
import { ensureAuth, ensureGuest } from "../middleware/authMiddleware.js";
import * as trailsController from "../controllers/trailController.js";

router.get("/", trailsController.getAllTrails); // Ensure 'trailsController' is imported correctly
router.get("/Login", getLogin);
router.post("/Login", postLogin);
router.get("/Profile", ensureAuth, trailsController.getAllTrails);
router.get("/Logout", logout);
router.get("/Signup", getSignup);
router.post("/Signup", postSignup);

export default router;