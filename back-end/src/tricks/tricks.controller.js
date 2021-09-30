const service = require("./tricks.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listTricks(req, res, next) {
	const tricks = await service.listTricks();
	res.json({ data: tricks });
}

module.exports = {
	listTricks: asyncErrorBoundary(listTricks),
};
