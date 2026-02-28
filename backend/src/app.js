const express = require("express");
const app = express();

// 🔥 VERY IMPORTANT
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

module.exports = app;
const eventRoutes = require("./routes/eventRoutes");
app.use("/api/events", eventRoutes);
const registrationRoutes = require("./routes/registrationRoutes");

app.use("/api/registrations", registrationRoutes);
