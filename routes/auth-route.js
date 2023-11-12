const express = require('express');
const bcrypt = require('bcrypt')
const route = express.Router()

const user = require("../models/Users")



route.post('/regis', (req, res) => {
    let data = req.body
    console.log(data);

    let saltRaunds = 10
    let hashPassword = bcrypt.hashSync(data.password, saltRaunds)

    data.password = hashPassword
    user.push(data)

    res.json({
        message: "berhassil"
    })
})
route.post('/login', (req, res) => {
    let data = req.body

    const User = user.find(item => item.email == data.email)

    if (!User) {
        res.json({
            message: "siapa nih"
        })
        return
    }
    if (bcrypt.compareSync(data.password, User.password)) {
        res.json({
            message: "berhasil nih"
        })
        return
    }

    res.json({
        message: "password salah"
    })
})

module.exports = route