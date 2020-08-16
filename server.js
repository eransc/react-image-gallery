var express = require("express");
var path = require("path");
const { default: Axios } = require("axios");
require("dotenv").config();
var PORT = process.env.PORT || 3001;
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const axios = require("axios");
const imagesRouter = express.Router();
//console.log("image_server_url", process.env.IMAGE_SERVER_URL, process.env['x-api-key']);

imagesRouter.get("/images", (req, res) => {
  axios
    .get(process.env.IMAGE_SERVER_URL, {
      headers: { "x-api-key": process.env["x-api-key"] },
    })
    .then((images) => {
      res.send(images.data);
    })
    .catch((err) => console.log(err));
});
app.use("/api", imagesRouter);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(
    "🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!",
    PORT,
    PORT
  );
});
