var express= require('express');
var app=express();
var fs=require('fs');

app.get('/',function(req,res){
    res.send("hello world");
});

app.get('/users',function(req,res){
    fs.readFile('users.json','utf-8',function(err,data){
        res.end(data.toString());
    })

})

app.listen(3000,function () {
    console.log("sever is running");
    
});