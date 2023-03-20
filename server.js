var express = require('express');
var app = express();
var fs = require("fs");

app.get('/api/users', function (req, res) {
    fs.readFile( __dirname + "/api/" + "users.json", 'utf8', function (err, data) {
        res.end(data);
    });
})
app.get('/api/userLists', function (req, res) {
    fs.readFile( __dirname + "/api/" + "userLists.json", 'utf8', function (err, data) {
        res.end(data);
    });
})
var server = app.listen(8080, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("测试api，访问地址为 http://%s:%s", host, port)
});
