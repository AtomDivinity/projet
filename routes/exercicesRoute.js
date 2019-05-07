const express = require('express');
const app = express();

//Consulter la liste des exercices
app.get ('/exercices', (req, res) => {
    res.render('index');
});

//Consulter le detail un exercice 
app.get('/exercices/:id', (req, res) => {
    res.render('index');
});

//Supprimer un exercice
app.delete('/exercices/:id', (req, res) => {
    res.render('index');
});

//Modifier un exercice
app.put('/exercices/:id', (req, res) => {
    res.render('index');
});

//créer un exercice
app.post('/exercices', (req, res) => {
    res.render('index');
});