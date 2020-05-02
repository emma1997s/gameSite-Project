const express = require('express');
const ejs = require('ejs');
const ejsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const path = require('path');

//Init app with express
const app = express();

//set the views middleware
app.set('view engine', 'ejs');
app.use(ejsLayouts);

//Bring in the home route
app.use('/', require('./routes/welc'));

//finally bring in the pages routes
app.use('/pages', require('./routes/pages'));

//set express body middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//create a port for the server
const PORT = process.env.PORT || 35007;

//init PORT with server
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));