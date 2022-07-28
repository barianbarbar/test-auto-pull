const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const taskRouter = require("./routes/task");

// add komentar aku ejs
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

app.use("/", taskRouter);

const db_atlas = "mongodb+srv://user-radea:radeakui12@cluster0.hri4h.mongodb.net/taskList";
const db_local = "mongodb://mongo:27017/taskList";

mongoose.connect(db_local)
.then(() => {
    console.log("Status Connected...");
});

app.listen(4000, () => {
    console.log("Server running with port 3000");
});
