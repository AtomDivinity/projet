const express = require('express');
const app = express();

//Accéder à la page de Connexion
app.get('/utilisateurs/login', (req, res) => {
    res.render('index');
});

//Créer un utilisateur
app.post('/utilisateurs', (req, res) => {
    res.render('index');
});

//Modifier un utilisateur
app.put('/utilisateurs/:id', (req, res) => {
    res.render('index');
});

//Accéder à ma page de profil
app.get('/utilisateurs/monCompte', (req, res) => {
    res.render('index');
});

//Supprimer un utilisateur
app.delete('/utilisateurs/:id', (req, res) => {
    res.render('index');
});