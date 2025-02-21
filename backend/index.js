const express = require("express");
const app = express();
const port = 4545;

// Middleware for parsing JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importing Routes
const memberRoutes = require("./Routes/members.route");

// Using Routes
app.use("/api/members", memberRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the World of PERN stack");
});

// Start the Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
