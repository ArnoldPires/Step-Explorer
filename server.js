import express from "express";
import morgan from "morgan";
import connectDB from "./config/database";
import passport from "./config/passport";
import session from "express-session";
const MongoStore = require("connect-mongo")(session);
import flash from "express-flash";
import mongoose from "mongoose";
require("dotenv").config({ path: "./.env" });

require("./config/passport")(passport);
connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", jsx);
app.use(express.static("public"));
app.use("/public/images/", express.static("./public/images"));

// import express from "express";
// import { fileURLToPath } from 'url'; // To recreate __dirname
// import path from 'path';
// import jsxEngine from "jsx-view-engine";
// import mongoose from "mongoose";
// import methodOverride from "method-override";
// import dotenv from "dotenv";
// import controllerlog from "./controllers/trailController.js";

// dotenv.config();

// const app = express();

// // Recreate __dirname in ES module
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// // Destructure 'connect' and 'connection' from the imported 'mongoose'
// const { connect, connection } = mongoose;

// // Configure mongoose
// connect(process.env.DB_STRING, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// connection.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// // Middleware
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: false }));
// app.use(methodOverride("_method"));

// // Set up JSX view engine
// app.set("view engine", "jsx");
// app.engine("jsx", jsxEngine());
// app.set('views', path.join(__dirname, 'src', 'pages')); // Use the recreated __dirname

// // Routes
// app.use("/pages", controllerlog);

// // Home page route
// app.get("/", (req, res) => {
//   res.render("homePage/HomePage"); // Corrected path, no need to specify 'pages/' as it's already set in 'views'
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });