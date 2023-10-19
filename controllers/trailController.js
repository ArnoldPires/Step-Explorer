import { Router } from "express";
const router = Router();
import { find, create, findById, findByIdAndUpdate, findByIdAndRemove } from "../models/trailModel.js";

// Index
router.get("/Profile", async (req, res) => {
  try {
    const logs = await find();
    res.render("trails/Profile", { logs });
  } catch (error) {
    console.log(error);
  }
});

// New
router.get("/NewTrails", (req, res) => {
  res.render("trails/NewTrails");
});

// Create
router.post("/Profile", async (req, res) => {
  try {
    // Check if the shipIsBroken checkbox is checked
    const shipIsBroken = req.body.shipIsBroken === "on";
    await create({
      title: req.body.title,
      entry: req.body.entry,
      shipIsBroken: shipIsBroken,
    });
    res.redirect("/trails/Profile");
  } catch (error) {
    console.log(error);
  }
});

// Edit
router.get("/:id/edit", async (req, res) => {
  try {
    const trail = await findById(req.params.id);
    res.render("logs/EditTrails", { trail });
  } catch (error) {
    console.log(error);
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const shipIsBroken = req.body.shipIsBroken === "on";
    await findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      entry: req.body.entry,
      shipIsBroken: shipIsBroken,
    });
    res.redirect(`/trails/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await findByIdAndRemove(req.params.id);
    res.redirect("/trails/Profile");
  } catch (error) {
    console.log(error);
  }
});

// Show
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const trail = await findById(req.params.id);
    res.render("trails/ShowTrails", { trail: trail });
  } catch (error) {
    console.log(error);
  }
});

export default router;