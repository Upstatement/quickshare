var http    = require('http'),
	express = require('express'),
	app     = express(),
	htmlFile,
	rootPath;

if ( process.env.NODE_ENV === 'dev' ) {
	htmlFile = 'qs_demo.html';
	rootPath = __dirname;
} else if (process.env.NODE_ENV === 'test') {
	htmlFile = 'qs_test.html';
	rootPath = __dirname + '/../test/';
	app.use(express.static(__dirname + '/../test/'));
}

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/../'));


app.get('/', function(req,res) {
	res.sendFile(htmlFile, {root: rootPath});
});

app.listen('3000', '127.0.0.1');
console.log(process.env.NODE_ENV + ' server is listening on port 3000');
