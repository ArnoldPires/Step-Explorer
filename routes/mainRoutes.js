import express from "express";
const router = express.Router(); // Use express.Router() to create a router instance
import { getLogin, postLogin, logout, getSignup, postSignup } from "../controllers/authController.js";
import { ensureAuth, ensureGuest } from "../middleware/authMiddleware.js";
import * as trailsController from "../controllers/trailController.js";

router.get("/", trailsController.getAllTrails); // Ensure 'trailsController' is imported correctly
router.get("/login", getLogin);
router.post("/login", postLogin);
router.get("/profile", ensureAuth, trailsController.getAllTrails);
router.get("/logout", logout);
router.get("/signup", getSignup);
router.post("/signup", postSignup);

export default router;