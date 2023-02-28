"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(200).json({ todo: todos });
});
router.put('/todo/:todoid', (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const todoindex = todos.findIndex(todo => todo.id === params.todoid);
    console.log(todoindex);
    if (todoindex >= 0) {
        todos[todoindex] = {
            id: todos[todoindex].id,
            text: body.text
        };
        return res.status(200).json({ message: "Updated", todos: todos });
    }
    res.status(404).json({ message: "not found" });
});
router.delete('/todo/:todoid', (req, res, next) => {
    const params = req.params;
    const oldlength = todos.length;
    todos = todos.filter(todo => todo.id !== params.todoid);
    if (todos.length < oldlength) {
        return res.status(200).json({ message: "deleted", todos: todos });
    }
    res.status(404).json({ message: "id not found cannot delete" });
});
exports.default = router;
