exports.up = function (knex) {
	return knex.schema.createTable("tricks", (table) => {
		table.increments("trick_id").primary();
		table.string("trick_name").notNullable();
		table.integer("trick_difficulty").notNullable();
		table.string("trick_grip").notNullable();
		table.boolean("isEnder").defaultTo(false);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("tricks");
};
