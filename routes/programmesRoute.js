const express = require('express');
const app = express();

//Afficher la liste de mes programmes
app.get('/programmes/mesProgrammes', (req, res) => {
    res.render('index');
});

//Afficher le détail d'un programme
app.get('/programmes/mesProgrammes/:id', (req, res) => {
    res.render('index');
});

//Modifier un de mes programmes
app.put('/programmes/mesProgrammes/:id', (req, res) => {
    res.render('index');
});

//Supprimer un de mes programmes
app.delete('/programmes/mesProgrammes/:id', (req, res) => {
    res.render('index');
});

//Créer un programme
app.post('/programmes', (req, res) => {
    res.render('index');
});