import passport from "passport";
import validator from "validator"; // Import the entire validator module
import User from "../models/user.js";

export function getLogin(req, res) {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("login", {
    title: "Login",
    user: null,
  });
}

export function postLogin(req, res, next) {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email)) { // Use the validator object
    validationErrors.push({ msg: "Not sure if that email is valid. Try another one." });
  }
  if (validator.isEmpty(req.body.password)) {
    validationErrors.push({ msg: "You gotta enter in a password to continue." });
  }
  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });

  passport.authenticate("local", (err, user, info) => {
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      console.error(err);
      if (err) { return next(err); }
      req.flash("success", { msg: "You've logged in." });
      res.redirect(req.session.returnTo || "/profile");
    });
  })(req, res, next);
}

export function logout(req, res) {
  req.logout()
  req.session.destroy(err => {
    if (err) {
      console.error("Error: Failed to Logout for some reason...Try refreshing the browser", err)
    }
    req.user = null
    res.redirect("/")
  })
}

export function getSignup(req, res) {
  if (req.user) {
    return res.redirect("/profile")
  }
  res.render("signup", {
    title: "Create an Account",
    user: null
  })
}

export function postSignup(req, res, next) {
  const validationErrors = [];
  if (!isEmail(req.body.email)) {
    validationErrors.push({ msg: "That's not a valid Email Address." });
  }
  if (!isLength(req.body.password, { min: 8 })) {
    validationErrors.push({ msg: "That Password is too short, at least 8 characters long please." });
  }
  if (req.body.password !== req.body.confirmPassword) {
    validationErrors.push({ msg: "That Password doesn't match." });
  }
  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/signup");
  }
  req.body.email = normalizeEmail(req.body.email, { gmail_remove_dots: false });
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  // Use User model to call findOne
  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      req.flash("errors", { msg: "An account with that email address already exists." });
      return res.redirect("/signup");
    }
    user.save(err => {
      if (err) {
        return next(err);
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.redirect("/profile");
      });
    });
  });
}