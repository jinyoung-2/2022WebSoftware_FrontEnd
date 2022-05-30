// Create Table in DB

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "",       //본인 username 입력
  password: "",    //본인 password 입력
  database: "university",
});

con.connect(function(err){
  if(err) throw err;
  console.log("Connected!");

  var sql=  "CREATE TABLE student ("+
  "ID INT PRIMARY KEY,"+  // if) datatpye is "Long" => error
  "Name VARCHAR(255),"+
  "Major VARCHAR(255),"+
  "Gender VARCHAR(255),"+
  "Email VARCHAR(255)"+
  ")";

  con.query(sql, function(err,result){
    if(err) throw err;
    console.log("Table created");
  });
});
