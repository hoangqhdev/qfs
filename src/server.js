import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import dotenv from "dotenv"
// require('dotenv').config();

let app = express();
dotenv.config();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8080;
//PORT === undifined => port === 8080

app.listen(port, () => {
  //callback
  console.log("Backend Nodejs is runing on the port : " + port);
})