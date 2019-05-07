const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;


app.set('views', './views');
app.set('view engine', 'ejs');

// Dossier des assets
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

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




app.listen(port, () => {
    console.log(`listening on port ${port}`);
});