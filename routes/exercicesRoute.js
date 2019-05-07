const express = require('express');
const router = express.Router();

//Consulter la liste des exercices
router.get ('/exercices', (req, res) => {
    res.render('index');
});

//Consulter le detail un exercice 
router.get('/exercices/:id', (req, res) => {
    res.render('index');
});

//Supprimer un exercice
router.delete('/exercices/:id', (req, res) => {
    res.render('index');
});

//Modifier un exercice
router.put('/exercices/:id', (req, res) => {
    res.render('index');
});

//créer un exercice
router.post('/exercices', (req, res) => {
    res.render('index');
});

module.exports = router;