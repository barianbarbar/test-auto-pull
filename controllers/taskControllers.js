exports.pageAddNewTask = (req, res) => {
    res.render("index", { activePage: "home" });
};

exports.pageAllListTask = (req, res) => {
    res.render("index", { activePage: "list" });
};

exports.pageEditTask = (req, res) => {
    res.render("index", { activePage: "edit" });
}

exports.addNewTask = (req, res) => {
    res.send("Hello");
};