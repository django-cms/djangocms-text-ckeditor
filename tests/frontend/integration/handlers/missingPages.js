'use strict';

// #############################################################################
// Handles 404 and 500 pages

module.exports = {
	bind() {
		casper.on('http.status.404', resource => {
			casper.echo('404 page found: ' + resource.url, 'ERROR');
		});

		casper.on('http.status.500', resource => {
			casper.echo('500 page found: ' + resource.url, 'ERROR');
		});
	}
};
