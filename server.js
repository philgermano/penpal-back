//external modules
const express = require('express');

const cors = require('cors');
require('dotenv').config();

//internal modules
const routes = require('./routes');

//express
const app = express();

//port 
const PORT = process.env.PORT || 3000;

//Routes
app.use('/', routes.pen)

app.listen(PORT, () =>{
    console.log('RUNNING ON PORT', PORT)
})