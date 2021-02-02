'use strict';

// #############################################################################
// Handles load failure errors

module.exports = {
	bind() {
		casper.on('load.failed', error => {
			casper.echo(JSON.stringify(error), 'ERROR');
		});
	}
};
