const express = require('express')
const srv = express()
const todoRoute = require('./routes/todos')

srv.use(express.json())
srv.use(express.urlencoded({extended:true}))
// for post req

srv.get('/hello',function(req,res){
    res.send('hello')
})

srv.use('/public', express.static(__dirname + '/public'))

srv.use('/todos',todoRoute)

srv.get('/todos',function(req,res){//see todolist.js(jquery response here)
    res.send('hello')
})

srv.listen(4567,()=>{
    console.log('server started at http://localhost:4567')
})