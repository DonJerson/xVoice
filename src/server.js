const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '3.81.8.219',
  user     : 'root',
  password : 'Pri3to.Server',
  database : 'kamailio'
});

const getSubscribers=()=>{
  connection.connect();
  connection.query('SELECT * FROM subscriber', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
  connection.end();
  return
}
getSubscribers()

app.use(express.static(path.join(__dirname, '../build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 80);