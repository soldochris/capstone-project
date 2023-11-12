const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

//config
if(process.env.NODE_ENV !== "PRODUCTION"){
  require("dotenv").config({
    path: "backend/config/.env"
  })
}

//error handling
app.use(ErrorHandler);

module.exports = app;