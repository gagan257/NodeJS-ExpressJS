const express = require('express')
const srv = express()
const todoroute = require('./routes/todos')

srv.set('view engine','hbs')//telling express that view engine is hbs(library)
srv.set('views',__dirname +'/views')//tell express in whicj=h folder we have to look for views
srv.use(express.json())
srv.use(express.urlencoded({extended:true}))

srv.use('/todos', todoroute)

srv.listen(3456,()=>{
    console.log('server started at http://localhost:3456')
})