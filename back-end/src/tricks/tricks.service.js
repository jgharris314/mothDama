const knex = require("../db/connection");

async function listTricks() {
	return knex("tricks").select("*");
}

module.exports = {
	listTricks,
};
