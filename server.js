const express = require('express');
const app = express();
const port = process.env.PORT || 8080
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//* MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//* IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//* ROUTES

app.get('/', (req, res) => {
    res.status(200).send('We are on home')
})

//* DB CONFIG/CONECT TO DB
const connection_url = process.env.DB_CONNECTION;

mongoose.connect(connection_url, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},() => {
    console.log('connect to db')
});

//* LISTEN
app.listen(port);