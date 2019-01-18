require("babel-core/register")({
    presets: ['es2015']
});
require('./wdio.conf.js');

global.cfg.user = 'aa';
global.cfg.key = 'aa';

global.cfg.capabilities = [{
    name: 'single_appium_test',
    build: 'webdriver-browserstack',
    device: 'Samsung Galaxy S7',
    browserName: 'android',
    app: 'AndroidBuildTest' || 'bs://<hashed app-id>',
    'browserstack.debug': true
  }],

global.cfg.updateJob = false;

global.cfg.specs = [
    'tests/specs/*.js'
];

global.cfg.deprecationWarnings = false;

global.cfg.logLevel = 'silent';
global.cfg.reporters = ['dot', 'allure'];

exports.config = global.cfg;