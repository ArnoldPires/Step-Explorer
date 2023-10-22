import express from "express";
import { Router } from 'express';
const router = Router();

import * as authController from "../controllers/authController.js";
import { ensureAuth, ensureGuest } from "../middleware/authMiddleware.js";
import * as trailsController from "../controllers/trailController.js";

router.get("/", trailsController.getAllTrails); // Ensure 'trailsController' is imported correctly
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/profile", ensureAuth, trailsController.getAllTrails);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post('/signup', authController.postSignup);
router.get("/api/ping", (req, res) => {
  res.json({ message: "Backend is up and running." });
});

export default router;