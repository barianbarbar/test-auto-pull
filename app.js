const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World Tes</h1>");
});

app.listen(3000, () => {
    console.log("Server running with port 3000");
});
