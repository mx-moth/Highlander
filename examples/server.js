var connect = require('connect');
var port = 3000;
var host = 'localhost';
var child = require('child_process');

var startBrowser = function() {
	var address = ['http://', host, ':', port, '/'].join('');
	console.log("Launching a browser at", address);
	child.spawn('sensible-browser', [address]);
};

var server = connect(function(req, res, next) {
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write('<h1>Yay it works</h1>');
	res.end();
});
if (require('highlander').thereCanBeOnlyOne(server, port)) {
	startBrowser();
}
