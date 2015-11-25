exports.config = {

    specs: [
        './test/e2e/*.spec.js'
    ],

    capabilities: [{
        browserName: 'firefox'
    }],
    logLevel: 'result',
    coloredLogs: true,

    screenshotPath: './errorShots/',

    baseUrl: 'http://yandex.com',
    waitforTimeout: 10000,

    framework: 'jasmine',

    reporter: 'spec',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000
        // expectationResultHandler: function(passed, assertion) {}
    }
};
