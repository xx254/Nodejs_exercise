var express = require('express')
var app = express()
var birds = require('./birds')




//express.Router()
app.use('/birds', birds)


app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html')
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})