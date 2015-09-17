//import
var http = require('http');
var mysql      = require('mysql');

//configure connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
});

//Getting data from database
connection.connect();
var data;
connection.query('SELECT * FROM test.passenger', function(err, rows, fields) {
    if (err) throw err;
    data = rows;
});

//run server
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(data));
}).listen(1337, "0.0.0.0");

console.log('Server running at localhost:1337/');