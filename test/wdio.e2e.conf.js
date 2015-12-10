var AllureReporter = require('../');

exports.config = {

    specs: [
        './test/e2e/*.spec.js'
    ],

    capabilities: [{
        browserName: 'firefox'
    }],

    logLevel: 'result',
    coloredLogs: true,

    baseUrl: 'http://yandex.com',
    waitforTimeout: 3000,

    framework: 'jasmine',

    reporter: [AllureReporter],
    reporterOptions: {},

    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000
    }
};
