const db = require('../models');

const express = require('express');
const router = express.Router();

//crud goes here
const index = (req, res) =>{
    db.Pen.find({}, (error, pens) =>{
        if(error) return res.status(400).json({error:error.message});

        return res.status(200).json({
            pens,
            requestedAt: new Date().toLocaleString()
        })
    })
}

const create = (req, res) =>{
    db.create(req.body, (error, createdPen) => {
        if(error) return res.status(400).json({error:error.message});

        return res.status(200).json(createdPen)
    })
}

module.exports = {
    index,
    create
}