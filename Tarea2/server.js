var express = require('express');
var path =  require('path');

var PORT = 8080;

var app=express()
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/menu.html'));
});

app.listen(PORT);
console.log('Running on port ' + PORT);

