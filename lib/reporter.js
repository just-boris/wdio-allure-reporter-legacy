var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Allure = require('allure-js-commons');
var allureReporter = new Allure();


/**
 * Initialize Allure reporter for Webdriver.io
 *
 * @param {Runner} runner
 * @api public
 */

function AllureReporter(baseReporter, options) {
    this.base = baseReporter;
    allureReporter.setOptions(options.reporterOptions);

    this.on('suite:start', function(suite) {
        //TODO: generate full title
        allureReporter.startSuite(suite.title);
    });

    this.on('suite:end', function() {
        // https://github.com/webdriverio/webdriverio/issues/890
        if(allureReporter.suites.length) {
            allureReporter.endSuite();
        }

    });

    this.on('test:start', function(test) {
        allureReporter.startCase(test.title);
    });

    this.on('test:pass', function() {
        allureReporter.endCase('passed');
    });

    this.on('test:fail', function(test) {
        var err = test.err;
        var status = err.name === 'AssertionError' ? 'failed' : 'broken';
        allureReporter.endCase(status, err);
    });

    this.on('test:pending', function() {
        allureReporter.endCase('pending');
    });
}

util.inherits(AllureReporter, EventEmitter);

module.exports = AllureReporter;
