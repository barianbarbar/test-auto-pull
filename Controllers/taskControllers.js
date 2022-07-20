exports.pageAddNewTask = (req, res) => {
    res.render("index", { activePage: "home" });
};

exports.pageAllListTask = (req, res) => {
    res.render("index", { activePage: "list-all" });
};

exports.pageEditTask = (req, res) => {
    res.render("index", { activePage: "edit" });
}
