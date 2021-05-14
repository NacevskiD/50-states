let express = require('express')
let states_api = require('./routes/states')
let path = require('path')

let app = express()

//joining path for distribution
let vueAppPath = path.join(__dirname,'client','dist')
app.use(express.static(vueAppPath))

app.use(express.json())

app.use('/api',states_api)

//general error code 404 for missing items
app.use(function (req,res,next){
    res.status(404).send('Not found')
})

// general error code 500 for server problems
app.use(function (err,req,res,next){
    console.log(err)
    res.status(500).send('Server Error')
})

//setting running port
let server = app.listen(process.env.PORT || 3000,function (){
    console.log('Server running on port', server.address().port)
})