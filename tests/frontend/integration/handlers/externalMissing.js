'use strict';

// #############################################################################
// Handles external resources load failures

module.exports = {
	bind() {
		casper.on('resource.error', resource => {
			casper.echo('Resource failed to load: ' + resource.url, 'ERROR');
		});
	}
};
