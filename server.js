const express = require('express')//added express
const app = express()//used express in app var

app.use(express.urlencoded({extended: true}))//for reading body data in POST req

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

app.get('/form2',(req,res)=>{
    console.log(__dirname)
    res.sendFile('files/form2.html', {root: __dirname})
})

app.post('/greet',(req,res)=>{
    let person = 'Guest'
    console.log(req.body)//see content in body
    if(req.body.person) person = req.body.person//in general req it does not exists
    res.send('Good Evening ' + person)
})

app.get('/:city/welcome', (req,res)=>{//:city(can be multiple) is a var takes what user puts and uses it with req.params.city
    res.send('welcome to ' +req.params.city+ ' !')
})

app.listen(4444,()=>{
    console.log('server started on http://localhost:4444')
})
///////////// OR ///////////////
// app.listen(4444)