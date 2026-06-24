import express from "express";
import furniture from "./routes/furniture.js";
import brands from "./routes/brands.js";
import rooms from "./routes/rooms.js";

const app = express();
const port = 3000;

// Converts JSON from the req body into JavaScript objects
app.use(express.json());
// Processes submitted HTML form data
app.use(express.urlencoded({ extended: true }));
// Logs all requests to the console
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// Logs a welcome message to the console for all requests
app.use((req, res, next) => {
  console.log("Welcome to the Modern Furniture Store!");
  next();
});

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/furniture", (req, res) => {
  res.render("furniture");
});

app.use("/api/furniture", furniture);
app.use("/api/brands", brands);
app.use("/api/rooms", rooms);

app.use((req, res, next) => {
  next({
    status: 404,
    message: "Page Not Found",
  });
});

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});