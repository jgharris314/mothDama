const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const knex = require("./db/connection");
const tricksRouter = require("./tricks/tricks.router");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const store = new KnexSessionStore({
	knex,
	tablename: "sessions",
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: "attacusAtlas",
		resave: false,
		saveUninitialized: true,
		store: store,
		cookie: {
			maxAge: 3600000,
		},
	})
);

app.use("/tricks", tricksRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
