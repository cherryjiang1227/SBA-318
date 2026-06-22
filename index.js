import express from "express";

import furniture from "./routes/furniture.js";
import brands from "./routes/brands.js";
import rooms from "./routes/rooms.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

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

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: err.message,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});