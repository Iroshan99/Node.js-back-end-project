var express= require('express');
var app=express();
var fs=require('fs');

var bodyParser = require('body-parser')
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({  extended: true }));

app.get('/',function(req,res){
    res.send("hello world");
});

app.get('/users',function(req,res){
    fs.readFile('users.json','utf-8',function(err,data){
        res.end(data.toString());
    })

})

app.get('/:id',function(req,res){
    fs.readFile('users.json','utf-8',function (err,data){
        var users=JSON.parse(data);
        var user=users["user"+req.params.id];
        res.end(JSON.stringify(user));
    })
})

app.post('/adduser',function(req,res){
    fs.readFile('users.json','utf-8',function(err,data){
        var users=JSON.parse(data);
        var user=req.body.user4;
        users['user'+user.id]=user;
        res.end(JSON.stringify(users));


    })
})

app.listen(3000,function () {
    console.log("sever is running");
    
});