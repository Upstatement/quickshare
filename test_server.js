var http = require('http'),
	express = require('express'),
	app = express(),
	fs = require('fs');

app.use(express.static(__dirname));

app.get('/', function(req,res) {
	var html = fs.readFileSync('./qs_demo.html');
	res.write(html);
})

app.listen('3000', '127.0.0.1');
console.log('listening on port 3000');
