import passport from "passport";
import validator from "validator";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const sendError = (res, status, message) => {
  res.status(status).json({ success: false, message });
};

export function getLogin(req, res) {
  if (req.user) {
    return res.redirect("/Profile");
  }
  res.render("Login", {
    title: "Login",
    user: null,
  });
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
    req.flash("errors", validationErrors);
    return res.redirect("/Login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });

  passport.authenticate("local", (err, user, info) => {
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/Login");
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      req.flash("success", { msg: "You've logged in." });
      res.redirect(req.session.returnTo || "/Profile");
    });
  })(req, res, next);
}

export function logout(req, res) {
  req.logout();
  req.session.destroy(err => {
    if (err) {
      console.error("Error: Failed to destroy the session during logout.", err);
    }
    req.user = null;
    res.redirect("/");
  });
}

export function getSignup(req, res) {
  if (req.user) {
    return res.redirect("/Profile");
  }
  res.render("Signup", {
    title: "Create an Account",
    user: null,
  });
}

export async function postSignup(req, res, next) {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Validate user input
    const validationErrors = [];
    if (!validator.isEmail(email)) {
      validationErrors.push("That's not a valid email address.");
    }
    if (!validator.isLength(password, { min: 8 })) {
      validationErrors.push("The password must be at least 8 characters long.");
    }
    if (password !== confirmPassword) {
      validationErrors.push("Passwords do not match.");
    }
    if (validationErrors.length > 0) {
      return sendError(res, 400, validationErrors.join(" "));
    }

    // Normalize the email address
    const normalizedEmail = validator.normalizeEmail(email, { gmail_remove_dots: false });

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return sendError(res, 400, "An account with that email address already exists.");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Log in the user
    req.logIn(newUser, (err) => {
      if (err) {
        return next(err);
      }
      res.status(200).json({ success: true, message: "Signup successful. You are now logged in." });
    });
  } catch (error) {
    console.error(error);
    return sendError(res, 500, "An unexpected error occurred during signup.");
  }
}