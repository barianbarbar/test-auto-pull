const TaskList = require("../models/taskModel");

exports.pageAddNewTask = (req, res) => {
    res.render("index", { activePage: "home" });
};

exports.pageAllListTask = (req, res) => {
    TaskList.find().sort({"createdAt": -1})
    .then((results) => {
        res.render("index", { activePage: "list", tasks: results });
    })
    .catch((error) => {
        console.log(error);
    });
};

exports.pageEditTask = (req, res) => {
    const { taskId } = req.params;
    TaskList.findById(taskId)
    .then((result) => {
        res.render("index", { activePage: "edit", task: [result] });
    })
    .catch((error) => {
        console.log(error);
    });
};


exports.addNewTask = (req, res) => {
    const { name } = req.body;
    const NewTaskList = new TaskList({
        name,
    });
    NewTaskList.save()
    .then((result) => {
        console.log(result);
        res.redirect("/");
    })
    .catch((error) => {
        console.log(error);
        res.redirect("/");
    });
};

exports.updateTask = (req, res) => {
    const { taskId } = req.params;
    const { name } = req.body;

    TaskList.findByIdAndUpdate(taskId, {
        name,
    }).then((result) => {
        console.log(result);
        res.redirect("/");
    }).catch((error) => {
        console.log(error);
        res.redirect("/");
    });
    console.log(taskId, name);
};

exports.deleteTask = (req, res) => {
    const { taskId } = req.params;

    TaskList.findByIdAndRemove(taskId)
    .then((result) => {
        console.log(result);
        res.redirect("/");
    })
    .catch((error) => {
        console.log(error);
        res.redirect("/");
    });
}