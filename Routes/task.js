const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");

router.get("/", taskControllers.pageAllListTask);
router.get("/add", taskControllers.pageAddNewTask);
router.get("/edit/:idTask", taskControllers.pageEditTask);
router.post("/add", taskControllers.addNewTask);

module.exports = router;
