const tricks = require("./tricks.json");

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex
		.raw("TRUNCATE TABLE tricks RESTART IDENTITY CASCADE")
		.then(function () {
			// Inserts seed entries
			return knex("tricks").insert(tricks);
		});
};
