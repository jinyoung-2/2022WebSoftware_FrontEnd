// Insert Value in Table

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "",       //본인 username 입력
  password: "",    //본인 password 입력
  database: "university", //Connect DB
});

con.connect(function(err){
  if(err) throw err;
  console.log("Connected!");

  // Insert several values
  var sql = "INSERT INTO student (ID, Name, Major, Gender, Email)" +
                "VALUES " +
                "(1000, 'Tim', 'Computer', 'Male', 'time@gmail.com'), " +
                "(1001, 'Sonya', 'Art', 'Female', 'sonya@gmail.com')," +
                "(1002, 'Brain', 'Social', 'Male', 'brain@gmail.com')," +
                "(1003, 'Natasha', 'Math', 'Female', 'natasha@gmail.com')";

  con.query(sql, function(err,result){
    if(err) throw err;
    console.log("4 records inserted");
  });
});
