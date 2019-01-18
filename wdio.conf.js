global.cfg = {
    
    specs: [
        'tests/specs/*.js'
    ],
    exclude: [
    ],
    
    maxInstances: 1,
    
    capabilities: [],
             
    sync: true,
       
    logLevel: 'verbose',
    
    coloredLogs: true,
    
    deprecationWarnings: true,
    
    bail: 0,
    
    screenshotPath: './reports/errorShots/',
        
    waitforTimeout: 90000,
    
    connectionRetryTimeout: 90000,
    
    connectionRetryCount: 3,
    
    framework: 'mocha',
        
    reporters: ['dot', 'spec', 'allure', 'junit'],
    reporterOptions: {
        allure: {
            outputDir: './reports/allure-report-raw' 
        },
        junit: {
            outputDir: './reports/junit-results'
        }
    },
    
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:babel-register'],
        timeout: 90000
    },

    before: function (capabilities, specs) {
  
        var chai    = require('chai');
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
      },

};