// Update Value(s) in table

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "",       //본인 username 입력
  password: "",    //본인 password 입력
  database: "university",
});

con.connect(function(err){
  if(err) throw err;

  var sql = "UPDATE student SET Name='Jason' WHERE Name='Brain'";

  con.query(sql, function(err,result){
    if(err) throw err;
    console.log(result.affectedRows+" record(s) updated");
  });
});
