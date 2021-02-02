const integrationTests = require('djangocms-casper-helpers/gulp');
const path = require('path');
const child_process = require('child_process');

const argv = require('minimist')(process.argv.slice(2));

const INTEGRATION_TESTS = [
	['smoke']
];

// Gulp tests:integration [--clean] [--screenshots] [--tests=loginAdmin,toolbar]
const pathToBin = child_process.execSync('npm bin').toString().trim();
const pathToCasper = path.join(pathToBin, 'casperjs');

const integrationConfig = {
	tests: INTEGRATION_TESTS,
	pathToTests: 'tests/frontend',
	argv,
	dbPath: 'testdb.sqlite',
	// serverCommand: '../tests/settings.py',
	serverCommand: 'tests/settings.py',
	logger: console.log.bind(console), // eslint-disable-line no-console
	waitForMigrations: 10,
	pathToCasper
};

const runIntegrationTests = integrationTests(integrationConfig)
module.exports = {runIntegrationTests};