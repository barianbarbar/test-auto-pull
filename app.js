const express = require("express");
const app = express();
const taskRouter = require("./Routes/task");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", taskRouter);

app.listen(3000, () => {
    console.log("Server running with port 3000");
});
