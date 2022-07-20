const express = require("express");
const router = express.Router();
const taskControllers = require("../Controllers/taskControllers");

router.get("/", taskControllers.pageAllListTask);
router.get("/add", taskControllers.pageAddNewTask);
router.get("/edit/:idTask", taskControllers.pageEditTask);

module.exports = router;
