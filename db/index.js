const mysql = require('mysql2');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'breathingAppEmails'
});

connection.connect(function(err){
  if(err){
    console.log ('error: '+ err.message);
    return;
  } else {
    console.log('connected to the mysql server as id '+connection.threadId);
  }
});

module.exports = connection;

