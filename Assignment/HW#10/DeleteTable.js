// Delete Value(s) in table

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

  var sql = "DELETE FROM student WHERE Gender = 'Female'";
  con.query(sql, function(err,result){
    if(err) throw err;
    console.log("Number of records deleted: "+result.affectedRows);
  });
});
