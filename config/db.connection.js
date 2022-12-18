const mongoose = require('mongoose');

const connectionStr = process.env.MONGODB_URI

mongoose.connect(connectionStr, {useNewUrlParser: true,
autoIndex: false, });

//set up listener to monitor your database connection
mongoose.connection.on('connected', ()=> console.log('db connected'));

mongoose.connection.on('error', (err)=> console.log(err.nessage));

mongoose.connection.on('dicsonnected', ()=> console.log('mongoose disconnected'));