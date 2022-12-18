const mongoose = require('mongoose');

const penSchema = new mongoose.Schema({
    email:{
        type:String, required: true, index: true
    },
    brand:{
        type:String
    },
    model:{
        type:String
    },
    nib:{
        type:String
    },
    color:{
        type:String
    }
    
});

const Pen = mongoose.model('Pen', penSchema)

module.exports = Pen