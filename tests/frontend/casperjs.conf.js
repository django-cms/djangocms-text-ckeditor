'use strict';

// #############################################################################
// CasperJS options

module.exports = {
	init() {
		this.viewportSize();
		this.timeout(20000);
	},

	viewportSize(width, height) {
		const viewportWidth = width || 1280;
		const viewportHeight = height || 1024;

		casper.echo('Current viewport size is ' + viewportWidth + 'x' + viewportHeight + '.', 'INFO');

		casper.options.viewportSize = {
			width: viewportWidth,
			height: viewportHeight
		};
	},

	timeout(timeout) {
		casper.options.waitTimeout = timeout || 10000;
	}
};
