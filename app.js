const express = require("express")
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js")
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
//app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs')

var newList = []
var second = []
var today,day,options
app.get("/",function(req,res)
{
  day = date.getDate()
  res.render('index',{listTitle: day,list: newList})
})
app.get("/work",function(req,res)
{
  res.render('index',{listTitle: "Work",list: second})
})
app.post("/",function(req,res)
{
  let item = req.body.newVal
  console.log(req.body)
  if(req.body.button === "Work")
  {
    second.push(item)
    res.redirect("/work")
  }
  else
  {
    newList.push(item)
    res.redirect("/")
  }
})
app.get("/about",function(req,res)
{
  res.render("about")
})
app.listen(process.env.PORT || 3000)
