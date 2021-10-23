require("dotenv").config();
const path = require("path");

const {
	DATABASE_URL = "postgres://dtmihfft:iywAJ5ptULTq7uR7Xc7IWHx-yJv_M1el@kashin.db.elephantsql.com/dtmihfft",
	DATABASE_URL_DEVELOPMENT = "postgres://dtmihfft:iywAJ5ptULTq7uR7Xc7IWHx-yJv_M1el@kashin.db.elephantsql.com/dtmihfft",
	DATABASE_URL_TEST = "postgres://nhxpnekq:SUv-vgqB0e7T842eYxz3D6IQ-meYxj1S@kashin.db.elephantsql.com/nhxpnekq",
	DATABASE_URL_PREVIEW = "postgres://kucvyxxc:UZS3F8yCygP0x3Sg8kcUpIC8UGyskJFa@kashin.db.elephantsql.com/kucvyxxc",
	DEBUG,
} = process.env;

module.exports = {
	development: {
		client: "postgresql",
		pool: { min: 1, max: 3 },
		connection: DATABASE_URL_DEVELOPMENT,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
	test: {
		client: "postgresql",
		pool: { min: 1, max: 3 },
		connection: DATABASE_URL_TEST,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
	preview: {
		client: "postgresql",
		pool: { min: 1, max: 3 },
		connection: DATABASE_URL_PREVIEW,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
	production: {
		client: "postgresql",
		pool: { min: 1, max: 3 },
		connection: DATABASE_URL,
		migrations: {
			directory: path.join(__dirname, "src", "db", "migrations"),
		},
		seeds: {
			directory: path.join(__dirname, "src", "db", "seeds"),
		},
		debug: !!DEBUG,
	},
};
