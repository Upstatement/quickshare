var http = require('http'),
	express = require('express'),
	app = express(),
	html_path;

if(process.env.NODE_ENV === 'development') {
	html_path = '/test/qs_demo.html';
} else if(process.env.NODE_ENV === 'test') {
	html_path = '/test/qs_test.html';
}

app.use(express.static(__dirname));

app.get('/', function(req,res) {
	res.redirect(html_path);
});

app.listen('3000', '127.0.0.1');
console.log(process.env.NODE_ENV + ' server is listening on port 3000');
