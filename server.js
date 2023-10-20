import express from "express";
import morgan from "morgan";
import connectDB from "./config/database.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import flash from "express-flash";
import mongoose from "mongoose";
import passport from "passport";
import { configurePassport } from "./config/passport.js";
import mainRoutes from "./routes/mainRoutes.js";
import trailRoutes from "./routes/trailRoutes.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
const app = express();

connectDB();
configurePassport(passport);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/public/images/", express.static("./public/images"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static("pages"));

app.use(
  session({
    secret: "Hiking is great!",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_STRING, // Your MongoDB connection URL
      mongooseConnection: mongoose.connection,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use("/", mainRoutes);
app.use("/trails", trailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });