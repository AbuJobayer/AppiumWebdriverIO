require("babel-core/register")({
    presets: ['es2015']
});
require('./wdio.conf.js');

global.cfg.capabilities = [{

 /*
    udid: "eef72b903259194ac25de4b758a3d1b67402cf65",
    bundleId: "com.racing.enterprise.alpha",
    platformName: "iOS",
    platformVersion: "11.4.1",
    deviceName: "iPhoneRHM",
    automationName: "XCUITest",
    newCommandTimeout: "600000",
    useJSONSource: true,
    wdaStartupRetryInterval: "1000",
    clearSystemFiles: true,
    useNewWDA: true,
    waitForQuiescence: false,
    shouldUseSingletonTestManager: false

    platformName: "Android",
    platformVersion: "8.1",
    deviceName: "Nexus 5X API 27",
    browserName: 'android',
    app: "/Users/Jobayer/Documents/workspace/racing.com-appv2-appium/app-release.apk",
    automationName: "Appium"
*/

    platformName: "Android",
    platformVersion: "6.0.1",
    deviceName: "Samsung Galaxy S7",
    browserName: 'Android',
    app: "/Users/Jobayer/Documents/workspace/racing.com-appv2-appium/app-release.apk",
    //appPackage: 'com.racing.android',
    clearSystemFiles: "true",
    automationName: "Appium",
    appActivity: ".MainActivity"

    /*
    platformName: "Android",
    platformVersion: "8.0.0",
    deviceName: "Galaxy Note8",
    //browserName: 'Android',
    app: "/Users/Jobayer/Documents/workspace/racing.com-appv2-appium/app-release.apk",
    appPackage: 'com.racing.android',
    clearSystemFiles: "true",
    automationName: "Appium",
    appActivity: ".MainActivity"

    platformName: "Android",
    platformVersion: "8.1.0",
    deviceName: "Nexus 5x API 27",
    app: "/Users/Jobayer/Documents/workspace/racing.com-appv2-appium/app-release.apk",
    //appPackage: 'com.racing.android',
    clearSystemFiles: "true",
    automationName: "Appium",
    appActivity: ".MainActivity"

*/

}];

global.cfg.specs = [
    'tests/specs/validateHorseCardPopup.js'
];

global.cfg.exclude = [
   // 'tests/specs/*.js'
];

global.cfg.suites = {
    set1: [
        'tests/specs/testHomescreen.js',
        'tests/specs/testHorseProfile.js',
        'tests/specs/testJockeyCard.js',
    ]
};

global.cfg.host = '0.0.0.0';
global.cfg.port = '4723';
//global.cfg.port = '4723';

global.cfg.baseUrl = 'http://localhost';


exports.config = global.cfg;