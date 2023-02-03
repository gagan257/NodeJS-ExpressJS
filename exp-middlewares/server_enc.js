const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/public'))
//linking whole folder with path can access file with further '/' breakdown

function decodeQueryBase64(req,res,next){//middleware
    for(let q in req.query[q]){//loop
        let data = req.query[q]
        data = new Buffer(data, 'base64').toString('ascii')//for convert of base64 to code
        req.query[q] = data
    }
    next()
}

app.get('/eval', (req,res) => {
    console.log(req.query)
    res.send('============ eval result ===============')//result goes here
})

app.listen(4545,()=>{
    console.log('started on http://localhost:4545')
})