const express = require('express')//added express
const app = express()//used express in app var

app.get('/',(req,res)=>{//for server link general(simple localhost:portnum)
    res.send('<h1 style="color: red;">Hello World</h1>')
})


app.get('/wish',(req,res)=>{//for server link with localhost:portnum/wish)
    res.send('<h1 style="color: green;">Good Morning</h1>')
})

app.get('/form',(req,res)=>{
    console.log(__dirname)
    res.sendFile('files/form.html', {root: __dirname})
})

app.get('/greet',(req,res)=>{
    let person = 'Guest'
    if(req.query.person) person = req.query.person//in general req it does not exists
    res.send('Good Morning ' + person)
    // example: http://localhost:4444/greet?person=gagan = good morning gagan
    // example: http://localhost:4444/greet = good morning
})

app.listen(4444,()=>{
    console.log('server started on http://localhost:4444')
})
///////////// OR ///////////////
// app.listen(4444)