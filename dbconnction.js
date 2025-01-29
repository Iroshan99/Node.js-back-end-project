var db=require('mysql');

var con=db.createConnection({
    host:"Localhost",
    user:"root",
    password:"",
    database:"mydb"

});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql="create table customers(id int primary key auto_increment,name varchar(255),address varchar(255))";
    con.query(sql,function(err, result){
        if(err) throw err;
        console.log("table creted");
    })
})