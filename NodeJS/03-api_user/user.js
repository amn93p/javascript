import express from "express";

const router = express.Router();

const data = [
	{
		id: 1,
		name: "Izuku",
		email: "Izuku@yahoo.com",
	},
	{
		id: 2,
		name: "Drake",
		email: "Drake@yahoo.com",
	},
	{
		id: 3,
		name: "Marion",
		email: "Marion@yahoo.com",
	},
];

router.get("/all", (req, res) => {
	res.status(200).json(data);
});

router.post("/add", (req, res) => {
	const NEW_USER = req.body;

	data.push(NEW_USER);

	res.status(201).json({ message: "Utilisateur ajouté", data });
});

router.delete("/delete/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	const userExists = data.some((user) => user.id === userId);

	if (userExists) {
		const newData = data.filter((user) => user.id !== userId);
		data.splice(0, data.length, ...newData);
		console.log(userId);
		res.status(200).json(newData);
	} else {
		console.log(userId);
		res.status(404).json({ message: `Utilisateur non trouvé` });
	}
});

router.put("/update/:id", (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	const checkParams = data.some((user) => user.id == id);

	if (checkParams) {
		let result = data.filter((user) => {
			if (user.id == id) {
				// (req.body.id)
				user.name = name;
				// (req.body.name)
			}
			return user;
		});
		res.status(200).json(result);
	}

	if (!checkParams) {
		res.status(404).json({ message: "Utilisateur non trouvé" });
	}
});
export default router;
