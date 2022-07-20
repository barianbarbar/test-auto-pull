const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<center><h1>Hello World 1</h1></center>");
});

app.listen(3000, () => {
    console.log("Server running with port 3000");
});
