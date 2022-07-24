const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const taskRouter = require("./routes/task");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", taskRouter);

mongoose.connect("mongodb://mongo:27017/taksList")
.then(() => {
    console.log("Status Connected...")
});

app.listen(4000, () => {
    console.log("Server running with port 3000");
});
