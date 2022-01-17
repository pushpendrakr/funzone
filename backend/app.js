const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("HI!");
});

// routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");

app.use("/api/index", indexRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started @ ${PORT}`);
});
