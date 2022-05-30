// Create DATABASE

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "",       //본인 username 입력
  password: ""    //본인 password 입력
});

con.connect(function(err){
  if(err) throw err;
  console.log("Connected!");

  // Database name = "university"
  con.query("CREATE DATABASE university", function(err,result){
    if(err) throw err;
    console.log("Database created");
  });
});
