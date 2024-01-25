const express = require("express");
const app = express();

app.use((req, res) => {
	res.json({ reponse: "Hello World 😬" });
});

app.use((req, res, next) => {
	console.log("First middleware");
	next();
});

app.use((req, res, next) => {
	console.log("Seconde middleware");
	next();
});

module.exports = app;
