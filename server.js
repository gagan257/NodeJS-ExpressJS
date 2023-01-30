const express = require('express')//added express
const app = express()//used express in app var

app.get('/',(req,res)=>{//for server link general(simple localhost:portnum)
    res.send('<h1 style="color: red;">Hello World</h1>')
})


app.get('/wish',(req,res)=>{//for server link with localhost:portnum/wish)
    res.send('<h1 style="color: green;">Good Morning</h1>')
})

app.listen(4444,()=>{
    console.log('server started on http://localhost:4444')
})
///////////// OR ///////////////
// app.listen(4444)