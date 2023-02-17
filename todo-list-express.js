const express = require('express')
const app = express()

app.use(express.urlencoded({extended:true}))

let tasks=[
    'sample task'
]
app.get('/',(req,res)=>{
    let tasklist = tasks.map(t=>`<li>${t}</li>`).join('\n')
    res.send(`
    <html>
    <body>
        <form action="/" method="POST">
            <input type="text" name="newtask">
            <button type="submit">ADD</button>
        </form>
        <ul>
            ${tasklist}
        </ul>
    </body>
    </html>
    `)
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newtask)
    res.redirect('/')
})

app.listen(5555,()=>{
    console.log('server started at http://localhost:5555/')
})