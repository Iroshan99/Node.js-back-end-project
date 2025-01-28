var db=require('mysql');

var con=db.createConnection({
    host:"Localhost",
    user:"root",
    password:""

});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
})