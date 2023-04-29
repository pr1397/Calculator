//jshint esversion:6
const { request } = require('express')
const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded());
app.use(express.json())
app.get('/', function(req, res) {
  console.log(req)
  res.sendFile(__dirname+"/index.html");
})
app.post("/", function(req, res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var num = num1 + num2;
    res.send("The sum is " + num);
})
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })