// // Importation du module express
// import express from 'express';

// // Création d'un routeur express
// const router = express.Router();

// // Données initiales sous forme d'objet JSON
// const data = [
//   {
//     id: 1,
//     name: "Izuku",
//     email: "Izuku@yahoo.com"
//   },
//   {
//     id: 2,
//     name: "Drake",
//     email: "Drake@yahoo.com",
//   },
//   {
//     id: 3,
//     name: "Marion",
//     email: "Marion@yahoo.com",
//   },
// ];

// // Route GET pour récupérer tous les utilisateurs
// router.get("/all", (req, res) => {
//   res.status(200).json(data);
// });

// // Route POST pour ajouter un nouvel utilisateur
// router.post('/add', (req, res) => {
//   // La route POST doit permettre d'ajouter un nouvel utilisateur et renvoyer une réponse JSON du tableau (data).
//   data.push(req.body);
//   res.status(201).json(data);
// });

// // Route DELETE pour supprimer un utilisateur par son ID
// router.delete('/delete/:id', (req, res) => {
//   console.log(req.params);
//   // Filtrage du tableau pour supprimer un utilisateur
//   const { id } = req.params;
//   // Utilisation de la fonction some pour vérifier si l'utilisateur existe
//   const checkParams = data.some((user) => user.id ==  id);

//   if(checkParams){
//     // Filtrage des données pour obtenir un nouveau tableau sans l'utilisateur supprimé
//     const newData = data.filter(user => user.id != id);
//     res.status(200).json(newData);
//   }

//   if(checkParams === false){
//     res.status(404).json({ message: "user not found !" });
//   }
// });

// // Route PUT pour mettre à jour les informations d'un utilisateur par son ID
// router.put('/update/:id', (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;

//   // Vérification si l'utilisateur existe dans le tableau
//   const checkParams =  data.some(user => user.id == id);
  
//   if(checkParams){
//     // Mise à jour du nom de l'utilisateur
//     let result = data.filter(user => {
//       if(user.id == id) {
//         user.name = name;
//       }
//       return user;
//     });
//     res.status(200).json(result);
//   }

//   if(!checkParams)
//   {
//     res.status(404).json({ message: 'user not found !'});
//   }
// });

// // Exportation du routeur pour une utilisation dans d'autres fichiers
// export default router;
