const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

//Routes imports
const utilisateursRoute = require('./routes/utilisateursRoute');
const exercicesRoute = require('./routes/exercicesRoute');
const programmesRoute = require('./routes/programmesRoute');

const port = 3000;

// Dossier des assets
app.use('/public', express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');


//Routes imports
app.use('/utilisateursRoute', utilisateursRoute);
app.use('/exercicesRoute', exercicesRoute);
app.use('/programmesRoute', programmesRoute);

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});