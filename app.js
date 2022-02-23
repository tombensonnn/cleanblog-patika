const express = require('express');
const ejs = require('ejs');
const app = express();


// TEMPLATE ENGINE
app.set('view engine','ejs');

// MIDDLEWARES
app.use(express.static('public'));

// ROUTES
app.get('/', (req,res) => {
    res.render('index');
});

app.get('/index', (req,res) => {
    res.render('index');
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/add', (req,res) => {
    res.render('add');
});

port = 3001;

app.listen(port, () => {
    console.log(`Server opened successfully. Port: ${port}`);
});