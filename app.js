const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;


app.set('views', './views');
app.set('view engine', 'ejs');

// to service static files from the public folder
app.use('/public', express.static('public'));


// check token on all pages except the ones mentioned in unless()

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});