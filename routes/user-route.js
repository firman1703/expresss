const express = require('express');
const bcrypt = require('bcrypt')
const route = express.Router()

const user = require("../models/Users")

route.get('/', (req, res) => {
    res.json({
        data: user
    })
})

module.exports = route