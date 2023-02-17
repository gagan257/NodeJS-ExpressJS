const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs')//tells which templating lang we are using

let tasks=[
    'sample task'
]
app.get('/',(req,res)=>{
    res.render('home', {
        title: 'new_title',
        tasks
    })
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newtask)
    res.redirect('/')
})

app.listen(5555,()=>{
    console.log('server stated at http://localhost:5555/')
})