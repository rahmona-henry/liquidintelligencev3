const express = require('express')
const app = express()

app.get('/', function (req,res){
  res.send('Hello Jim')
})

app.listen(3000, function(){
  console.log('Cheers Everybody!')
})
