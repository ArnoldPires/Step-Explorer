import { findTrailById } from "../models/trailModel.js";
import { cloudinary, uploader } from "../middleware/cloudinary.js";
import Trail from "../models/trailModel.js"; // Import the Trail model

// Get all trails
export async function getAllTrails(req, res) {
  try {
    const TrailAllItems = await findTrailById();
    res.json({
      trails: TrailAllItems,
      user: req.user
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

// Get user-specific trails
export async function getUserTrails(req, res) {
  try {
    const TrailItems = await find({ user: req.user._id });
    res.json({
      trails: TrailItems,
      user: req.user
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

// Create a new trail
export async function createTrail(req, res) {
  try {
    const result = await uploader.upload(req.file.path);
    const trail = new Trail({ // Create a new Trail instance
      name: req.body.name,
      cloudinaryId: result.public_id, // Corrected field name to 'cloudinaryId'
      picture: result.secure_url,
      difficulty: req.body.difficulty, // Corrected field name to 'difficulty'
      location: req.body.location,
      length: req.body.length,
      routeType: req.body.routeType,
      description: req.body.description,
      suitability: req.body.suitability,
      attractions: req.body.attractions, // Corrected field name to 'attractions'
      gMaps: req.body.gMaps,
      user: req.user._id, // Corrected field name to 'user' and added ._id
    });
    await trail.save(); // Save the newly created trail
    res.redirect(`/trails/${trail._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

// Get trail by ID
export async function getTrailById(req, res) {
  const { id } = req.params;
  try {
    const trail = await findById(id).populate("user");
    res.render("ViewTrail.jsx", {
      trail: trail,
      user: req.user
    });
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
}

// Get trail update form
export async function getUpdate(req, res) {
  const { id } = req.params;
  try {
    const trail = await findById(id).populate("user");
    res.render("Update.jsx", { trail, user: req.user });
  } catch (e) {
    console.error(e);
    res.status(500).send("Internal Server Error");
  }
}

// Update a trail
export async function putTrail(req, res) {
  try {
    const trail = await findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.redirect(`/trails/${trail._id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}

// Delete a trail
export async function deleteTrail(req, res) {
  try {
    const trail = await findById({ _id: req.params.id });
    await uploader.destroy(trail.cloudinaryid);
    await findByIdAndRemove({ _id: req.params.id });
    res.redirect("/profile");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}