const express = require('express')
const app = express()

function m1(req,res,next){
    console.log('running middleware 1')
    next()//for next middlware
}
function m2(req,res,next){
    console.log('running middleware 2')
    next()//without next we next middleware(any) cannot run
}
function m3(req,res,next){
    console.log('running middleware 3')
    next()
}
function m4(req,res,next){
    console.log('running middleware 4')
    next()
}
function m5(req,res,next){
    console.log('running middleware 5')
    next()
}

app.get('/hello',m2,m3,(req,res) => {//can use multiple func in between
    res.send('hello world')
})

app.listen(4444 , ()=>{
    console.log('server started on http://localhost:4444')
})