module.exports.thereCanBeOnlyOne = function(server, port) {
	try {
		server.listen(3000);
		return true;
	} catch (err) {
		if (err.code && err.code === 'EADDRINUSE') {
			return true;
		} else {
			throw err;
		}
	}
}
