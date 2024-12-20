import express from "express";
import bodyParser from "body-parser";

var app = express();
var port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => { 
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const fullName = req.body["Name"];
  const fC = req.body["FavClr"];
  res.render("index.ejs", { fullNameCreator: fullName, yourFavColor: fC });
});

app.listen(port, () => { 
  console.log(`Server running on port ${port}.`);
});