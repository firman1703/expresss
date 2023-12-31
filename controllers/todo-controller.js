const Todos = require("../models/Todos")

module.exports = {
    getAllTodo: (req, res) => {
        res.json({
            message: "berhasil mendapatkan data todos",
            data: Todos
        })
    },
    getTodoById: (req, res) => {
        const { id } = req.params
        const todo = Todos.find(todo => todo.id == id)

        res.json({
            message: "berhasil mendapatkan todo by ID",
            data: todo
        })
    },
    addTodo: (req, res) => {
        const data = req.body

        const newTodo = {
            id: Todos[Todos.length - 1].id + 1,
            value: data.value,
        }

        Todos.push(newTodo)

        res.status(201).json({
            message: "berhasil menambahkan data"
        })
    },
    editTodoById: (req, res) => {
        const { id } = req.params
        const { value } = req.body
        const todo = Todos.find(todo => todo.id == id)

        todo.value = value;

        res.json({
            message: "berhasil mengubah"
        })
    },
    deleteTodoById: (req, res) => {

        Todos.splice(todo, 1)

        res.json({
            message: "berhasil menghapus"
        })
    }
}