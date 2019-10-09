const express = require('express');


const bodyParser = require('body-parser');
const regController = require('../controller/regController');

const app = express();

//EJS
// app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header( "Access-Control-Allow-Headers", "Orgigin, X-Requested-With, Content-Type, Accept");
    res.header( "Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.use('/reg', regController);
;

app.get('/',(req, res, next) => {
    res.status(200).json("app.js");
});

module.exports = app;
