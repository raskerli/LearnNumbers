//importing modules
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
//creating express application
const app = express();
const port = 3000;
const API_URL = "http://numbersapi.com/";
//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
//get request handler for the root
app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "random/trivia");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: "Please enter the number" });
  }
});
//post request handler for the math
app.post("/math", async (req, res) => {
  const number = req.body.number;
  try {
    const result = await axios.get(API_URL + number + "/math");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: "Please enter the number" });
  }
});
//post request handler for the trivia
app.post("/trivia", async (req, res) => {
  const number = req.body.number;
  try {
    const result = await axios.get(API_URL + number + "/trivia");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: "Please enter the number" });
  }
});
//post request handler for the date
app.post("/date", async (req, res) => {
  const number = req.body.number;
  try {
    const result = await axios.get(API_URL + number + "/date");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: "Please enter the number" });
  }
});
//post request handler for the year
app.post("/year", async (req, res) => {
  const number = req.body.number;
  try {
    const result = await axios.get(API_URL + number + "/year");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: "Please enter the number" });
  }
});
//starting server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
