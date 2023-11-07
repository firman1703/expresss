const express = require("express")
const route = express.Router()
const todoRoutes = require("./todo-route")

route.get("/",(req,res) => {
    res.json({
        message: "selamat datang di sever"
    })
})


route.use("/todos",todoRoutes)

module.exports = route