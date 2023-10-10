const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const controllerlog = require("./controllers/controllerlog");

dotenv.config();

// Configure mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Set up JSX view engine
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// Routes
app.use("/pages", controllerlog);

// Home page route
app.get("/", (req, res) => {
  res.render("pages/homePage/HomePage");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});