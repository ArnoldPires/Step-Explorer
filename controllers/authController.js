import passport from "passport";
import validator from "validator";
import User from "../models/user.js";

export function getLogin(req, res) {
  if (req.user) {
    return res.status(200).json({ message: "User is already logged in" });
  }
  res.status(200).json({ message: "You can show the login form here" });
}

export function postLogin(req, res, next) {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email)) {
    validationErrors.push({ msg: "Not sure if that email is valid. Try another one." });
  }
  if (validator.isEmpty(req.body.password)) {
    validationErrors.push({ msg: "You gotta enter in a password to continue." });
  }
  if (validationErrors.length) {
    return res.status(400).json({ errors: validationErrors });
  }
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });

  passport.authenticate("local", (err, user, info) => {
    if (!user) {
      return res.status(401).json({ errors: info });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      res.status(200).json({ message: "You've logged in." });
    });
  })(req, res, next);
}

export function logout(req, res) {
  req.logout();
  req.session.destroy(err => {
    if (err) {
      console.error("Error: Failed to Logout for some reason...Try refreshing the browser", err);
    }
    req.user = null;
    res.status(200).json({ message: "Logged out successfully." });
  });
}

export function getSignup(req, res) {
  if (req.user) {
    return res.status(200).json({ message: "User is already signed up and logged in" });
  }
  res.status(200).json({ message: "You can show the signup form here" });
}

export async function postSignup(req, res, next) {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email)) {
    validationErrors.push({ msg: "That's not a valid Email Address." });
  }
  if (!validator.isLength(req.body.password, { min: 8 })) {
    validationErrors.push({ msg: "That Password is too short, at least 8 characters long please." });
  }
  if (req.body.password !== req.body.confirmPassword) {
    validationErrors.push({ msg: "That Password doesn't match." });
  }
  if (validationErrors.length) {
    return res.status(400).json({ errors: validationErrors });
  }
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });

  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ errors: [{ msg: "An account with that email address already exists." }] });
    }

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    await user.save();

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      res.status(201).json({ message: "Signup successful." });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: "Signup failed." }] });
  }
}
