const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./tricks.controller");

router.route("/").get(controller.listTricks).all(methodNotAllowed);

module.exports = router;
