const express = require("express");
const app = express();

// jika req langsung di postman
// app.get("/name/:first", function (req, res) {
//   res.send("Hello, your first name is " + req.params.first);
// });

app.get("/name", function (req, res) {
  res.send("Mei Rianni");
});
app.get("/name/:first", function (req, res) {
  res.send("Mei");
});

app.get("/name/:last", function (req, res) {
  res.send("Rianni");
});

app.listen(3000);
