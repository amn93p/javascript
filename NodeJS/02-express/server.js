const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.set("port", PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});
