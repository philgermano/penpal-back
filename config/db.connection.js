const mongoose = require('mongoose');

const connectionStr = process.env.MongoDB_URI

mongoose.connect(connectionStr + 'pen', {useNewUrlParser: true, autoIndex: true,});

//set up listener to monitor your database connection
mongoose.connection.on('connected', ()=> console.log('db connected'));

mongoose.connection.on('error', (err)=> console.log(err.nessage));

mongoose.connection.on('dicsonnected', ()=> console.log('mongoose disconnected'));