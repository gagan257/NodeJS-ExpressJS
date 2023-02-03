const route = require('express').Router()

let todos = [
    {task: "This is the first task"},
    {task: "This is task 2"}
]

route.get('/',function(req,res){
    // res.send('hello there')
    res.render('todos',{todos})
})

route.post('/',function(req,res){
    todos.push({
        task: req.query.newtodo//from todos.html
    })
    res.redirect('todos')//path
})

module.exports = route