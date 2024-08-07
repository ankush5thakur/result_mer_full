const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const Student = require("./model/studentModel.js");
const { abort } = require("process");

const cors = require("cors");

const server = express();
server.use(cors());
mongoose
  .connect(
    "mongodb+srv://ankushiit21:Hns10l24u4zJh41N@cluster0.kqcbbv1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("connected to db succesfuly"));

//   ye ek bar data push kr dia hh mongo db p...
// let data = fs.readFileSync("./detailed_result.json", "utf-8");

// let parsedData = JSON.parse(data);

// async function test() {
//   let student = await Student.insertMany(parsedData);
//   //   console.log(student[0]);
// }
// test();

server.use(express.json());

server.get("/user", async (req, res) => {
  let rnumb = req.headers.roll_number;
  //   console.log(rnumb);
  let data = await Student.findOne({ roll_number: rnumb });

  res.send(data);
});

server.listen(8000, () => {
  console.log("server is listening on port 8000");
});
