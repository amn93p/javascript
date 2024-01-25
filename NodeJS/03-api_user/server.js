import express from "express";

// Routes
import user from "./user.js";
import sneakers from "./sneakers.js";

const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());

// ROUTER
app.use("/api/user", user);
app.use("/api/sneakers", sneakers);

// LISTEN
app.listen(PORT, () => {
	console.log(`Listening at http://localhost:${PORT}`);
});
