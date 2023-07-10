const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// Can use IMAGES and CSS folders
app.use("/public/", express.static("./public"));

app.get("/", (req, res) => {
  // Get API
  https.get("https://api.adviceslip.com/advice", (response) => {
    response.on("data", (data) => {
      const advices = JSON.parse(data);
      const id = advices.slip.id;
      const advice = advices.slip.advice;
      res.render("index", {
        id: id,
        advice: advice,
      });
    });
  });
});

app.post("/", (req, res) => {
  // On click button, redirect to index.ejs
  res.redirect("/") 
});

// Load page on server port online or 3000 local
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000.");
});
