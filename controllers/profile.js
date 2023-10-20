import { find } from "../models/trail";
export async function getIndex(req, res) {
  try {
    const UsersTrails = await find({ user: req.user._id });
    res.render("profile.jsx", { trails: UsersTrails, user: req.user });
  } catch (err) {
    console.error(err);
  }
}