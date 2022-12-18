const express = require("express")
const router = express.Router();

const ctrls = require("../controllers")

//CRUD Routes
router.get('/pen', ctrls.pen.index)
router.post('/pen', ctrls.pen.create)

module.exports = router

