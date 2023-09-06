import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send(`This is coming from app.get("/")`);
});

app.listen(3000, function () {
  console.log(`Server running on port 3000`);
});
