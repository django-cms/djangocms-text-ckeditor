'use strict';

// #############################################################################
// Handles JavaScript page errors

module.exports = {
	bind() {
		casper.on('page.error', message => {
			casper.echo('Error on page: ' + JSON.stringify(message), 'ERROR');
		});
	}
};
