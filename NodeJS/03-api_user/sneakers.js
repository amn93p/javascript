import express from "express";

const router = express.Router();

const data = [
	{
		Id: 1,
		name: "Air Force 1 '07",
		category: "f",
		brand: "Nike",
		price: 129.99,
		content:
			"On a associé l'indémodable coloris blanc à du cuir qui change temporairement de couleur sous les rayons UV. On a aussi ajouté des empiècements en daim premium pleine fleur qui ne changent pas de couleur avec le soleil, pour jouer sur les textures, de jour comme de nuit.",
		stock: 10,
		online: true,
		size: ["EU 35", "EU 36", "EU 37", "EU 38", "EU 39"],
		avis: {
			stars: 4,
			nb: 11,
		},
		picture: [
			{
				pic1: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/9fabb2ae-e433-45da-b75b-f67cca81f0f0/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
				pic2: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/894eb3ff-9d8c-4958-bcbd-433e97c4d041/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
				pic3: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/4c8cc2eb-4393-41e5-bf7f-8fa824102376/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
				pic4: "https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/d92e2eac-58d9-445f-8487-6a0b65f47be0/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
				pic5: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/323ecccb-aee1-4cea-b588-154b4c28c8b8/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
				pic6: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/1b4e33d6-25fd-4c51-9fd2-014cf72e6da8/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
				pic7: "https://static.nike.com/a/images/t_prod,f_auto/w_1920,c_limit/1ba74a93-f833-43aa-aa5f-36f8f92dd086/date-de-sortie-de-la-air-force%C2%A01%C2%A0-07-%C2%AB%C2%A0white-and-multicolor%C2%A0%C2%BB-fq0709-100.jpg",
			},
		],
	},
	{
		Id: 2,
		name: "Nike Air Max 90 Futura",
		category: "f",
		brand: "Nike",
		price: 169.99,
		content: "Chaussure pour femme",
		stock: 7,
		online: true,
		avis: {
			stars: 4,
			nb: 267,
		},
		size: ["EU 35", "EU 36", "EU 37", "EU 38", "EU 39"],
		picture: [
			{
				pic1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/84e48564-3503-475e-8f86-6ddc062b2101/chaussure-air-max-90-futura-pour-lWBRQc.png",
				pic2: "https://static.nike.com/a/images/t_default/2335ef28-f32e-4a7b-b2a6-182698beb043/chaussure-air-max-90-futura-pour-lWBRQc.png",
				pic3: "https://static.nike.com/a/images/t_default/312d5ad9-cd65-4053-a6c9-1b44795dba53/chaussure-air-max-90-futura-pour-lWBRQc.png",
				pic4: "https://static.nike.com/a/images/t_default/b11763f6-34e5-4640-87f9-b281c3509759/chaussure-air-max-90-futura-pour-lWBRQc.png",
				pic5: "https://static.nike.com/a/images/t_default/b4d153a9-9643-4181-8e17-266e20524a1b/chaussure-air-max-90-futura-pour-lWBRQc.png",
				pic6: "https://static.nike.com/a/images/t_default/388b54a0-e399-4317-913c-af3a8c814ef0/chaussure-air-max-90-futura-pour-lWBRQc.png",
				pic7: "https://static.nike.com/a/images/t_default/2fd80dc5-f35c-4b19-92c2-31e92bfea10b/chaussure-air-max-90-futura-pour-lWBRQc.png",
				pic8: "https://static.nike.com/a/images/t_default/c7a49cd8-fc5c-4f10-a86c-f37e962959a8/chaussure-air-max-90-futura-pour-lWBRQc.png",
			},
		],
	},
	{
		Id: 3,
		name: "Nike Air Max Plus",
		category: "h",
		brand: "Nike",
		price: 199.99,
		content: "Chaussure pour homme",
		stock: 18,
		online: true,
		avis: {
			stars: 4,
			nb: 874,
		},
		size: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
		picture: [
			{
				pic1: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ab776c6e-c3e6-4eea-8977-ee8adb61882b/chaussure-air-max-plus-pour-hD9BmR.png",
				pic2: "https://static.nike.com/a/images/t_default/b502a0b5-cd71-4d80-acf8-066c69aadf7a/chaussure-air-max-plus-pour-hD9BmR.png",
				pic3: "https://static.nike.com/a/images/t_default/e79375ac-b403-4a2f-8623-8bc60c3aeec2/chaussure-air-max-plus-pour-hD9BmR.png",
				pic4: "https://static.nike.com/a/images/t_default/c53ab4b6-f32c-47ce-9285-dfc016622cec/chaussure-air-max-plus-pour-hD9BmR.png",
				pic5: "https://static.nike.com/a/images/t_default/7fb71319-1f07-40bc-8cf4-492bff8eccf0/chaussure-air-max-plus-pour-hD9BmR.png",
				pic6: "https://static.nike.com/a/images/t_default/7553e6fa-1896-409d-9429-a80a247ecdc5/chaussure-air-max-plus-pour-hD9BmR.png",
				pic7: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6d407da7-2c88-4b23-88a6-46caa76ddb37/chaussure-air-max-plus-pour-hD9BmR.png",
				pic8: "https://static.nike.com/a/images/t_default/115ab221-8410-4d67-8949-442346af4220/chaussure-air-max-plus-pour-hD9BmR.png",
			},
		],
	},

	{
		Id: 4,
		name: "Nike Aire Max 1",
		category: "f",
		brand: "Nike",
		price: 582,
		stock: 1,
		online: true,
		avis: {
			stars: 3,
			nb: 1878,
		},
		size: ["EU 40", "EU 41", "EU 42", "EU 43", "EU 44"],
		picture: [
			{
				pic1: "https://cdn-images.farfetch-contents.com/17/61/67/11/17616711_36856229_1000.jpg",
				pic2: "https://cdn-images.farfetch-contents.com/17/61/67/11/17616711_36857197_1000.jpg",
				pic3: "https://cdn-images.farfetch-contents.com/17/61/67/11/17616711_36857198_1000.jpg",
				pic4: "https://cdn-images.farfetch-contents.com/17/61/67/11/17616711_36857198_1000.jpg",
				pic5: "https://cdn-images.farfetch-contents.com/17/61/67/11/17616711_36857196_1000.jpg",
			},
		],
	},
];

router.get("/all", (req, res) => {
	res.status(200).json(data);
});

router.get("/categories/:category", (req, res) => {
	const category = req.params.category;
	const filteredData = data.filter((item) => item.category === category);
	res.status(200).json(filteredData);
	if (category) {
		res.status(200).json(filteredData);
	} else {
		res.status(404).json({ message: `pas trouvé !` });
	}
});

router.get("/details/:id", (req, res) => {
	const sneakerId = req.params.id;
	const filteredData = data.filter((item) => item.Id === parseInt(sneakerId));
	res.status(200).json(filteredData);
});

router.delete("/delete/:id", (req, res) => {
	const sneakerId = parseInt(req.params.id);
	const sneakerExists = data.some((sneaker) => sneaker.Id === sneakerId);

	if (sneakerExists) {
		const newData = data.filter((sneaker) => sneaker.Id !== sneakerId);
		data.splice(0, data.length, ...newData);
		console.log(sneakerId);
		res.status(200).json(newData);
	} else {
		console.log(sneakerId);
		res.status(404).json({ message: `Article non trouvé` });
	}
});

router.put("/update/:id", (req, res) => {
	const { id } = req.params;
	const checkParams = data.some((user) => user.Id == id);

	if (checkParams) {
		data.forEach((item) => {
			if (item.Id == id) {
				item.online = !item.online;
			}
		});
		res.status(200).json(data);
	} else {
		res.status(404).json({ message: "Article non trouvé" });
	}
});

router.put("/update/avis/:id", (req, res) => {
	const { id } = req.params;

	const checkParam = data.some((item) => item.Id == id);

	if (checkParam) {
		data.forEach((item) => {
			if (item.Id == id) {
				item.avis.stars += 1;
				item.avis.nb += 1;
			}
		});
		res.status(200).json(data);
	} else {
		res.status(404).json({ message: "Article non trouvé" });
	}
});

export default router;
