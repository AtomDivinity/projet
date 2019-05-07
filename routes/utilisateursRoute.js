const express = require('express');
const router = express.Router();


//Accéder à la page de Connexion
router.get('/utilisateurs/login', (req, res) => {
    res.render('index');
});

//Créer un utilisateur
router.post('/utilisateurs', (req, res) => {
    res.render('index');
});

//Modifier un utilisateur
router.put('/utilisateurs/:id', (req, res) => {
    res.render('index');
});

//Accéder à ma page de profil
router.get('/utilisateurs/monCompte', (req, res) => {
    res.render('index');
});

//Supprimer un utilisateur
router.delete('/utilisateurs/:id', (req, res) => {
    res.render('index');
});

module.exports = router;