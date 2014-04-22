var http = require('http'),
	express = require('express'),
	app = express(),
	fs = require('fs'),
	html_path;

if(process.env.NODE_ENV === 'development') {
	html_path = './qs_demo.html';
} else if(process.env.NODE_ENV === 'test') {
	html_path = './qs_test.html';
}

app.use(express.static(__dirname));

app.get('/', function(req,res) {
	var html = fs.readFileSync(html_path);
	res.write(html);
})

app.listen('3000', '127.0.0.1');
console.log(process.env.NODE_ENV + ' server is listening on port 3000');
