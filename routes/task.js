const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");

router.get("/", taskControllers.pageAllListTask);

// router.get("/add", taskControllers.pageAddNewTask);
// router.get("/edit/:taskId", taskControllers.pageEditTask);

// router.post("/add", taskControllers.addNewTask);
// router.post("/edit/:taskId", taskControllers.updateTask);

// router.get("/delete/:taskId", taskControllers.deleteTask);

module.exports = router;
