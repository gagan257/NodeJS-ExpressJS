const express = require('express')
const app = express()

app.get('/hello',(req,res)=>{
    let name = 'Guest'
    if(req.query.user) name = req.query.user

    res.send('Hello ' + name)
})

app.use('/public', express.static(__dirname + '/public'))
//linking whole folder with path can access file with further '/' breakdown

app.listen(4321,()=>{
    console.log('server started')
})

// const express = require('express')
// const app = express()

// app.get('/hello',(req,res)=>{
//     let name = 'Guest'
//     if(req.query.user) name = req.query.user

//     res.send('Hello ' + name)
// })

// app.use('/public', express.static(__dirname + '/public'))
// //linking whole folder with path can access file with further '/' breakdown

// app.listen(4321,()=>{
//     console.log('server started')
// })