//external modules
const express = require('express');

const cors = require('cors');
require('dotenv').config();

//whitelist and corsOptions 
const whitelist = ['*']
const corsOptions = {
    origin: function(origin, callback) {
        // if (whitelist.indexOf(origin) !== -1) {
        //     callback(null, true)
        //   } else {
        //     callback(new Error('Not allowed by CORS'))
        //   }
    callback(null, true)
    }
}

//internal modules
const routes = require('./routes');

//express
const app = express();

//port 
const PORT = process.env.PORT || 3000;

//DB connection
require('./config/db.connection')

//middleware
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//Routes
app.use('/pen', routes.pen)

app.listen(PORT, () =>{
    console.log('RUNNING ON PORT', PORT)
})