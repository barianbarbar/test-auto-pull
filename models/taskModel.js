const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Task = new Schema({
    name: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model("Task", Task);
