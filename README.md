# Racing.com AppV2 Appium

## Environment Setup for UI based functional testing(Using Appium Server): 
This is only required intially on a development machine.

### For use on Mac OSX - Development machine setup
1. Make sure Homebrew is installed. Follow instructions from: https://brew.sh/
2. Make sure NodeJS is installed. Run from terminal: "brew install node"
3. Make sure Allure is installed. Run from terminal: "brew install allure"

## Install Packages
- Run from terminal: "npm install"

### Appium Server installation
- Verify installation for IOS
- Run from terminal: "appium-doctor --ios"
- Verify installation for Android
- Run from terminal: "appium-doctor --android"
- Resolve any issues indicated in the reports

## Install Additional Packages
- Run from terminal: "npm install <package name> --save-dev"

## Running a test locally:
- Duplicate the "wdio.dev.conf.js.example.js" file and rename it to: "wdio.dev.conf.js"
- Start a new Terminal window and start appium by typing the following command: "appium"
- Start the testrun using: 
    - "npm run test"
- Generate the allure report:
    - "allure generate ./reports/allure-report-raw -o ./reports/allure-report --clean"
- "allure open ./reports/allure-report"

## Generate distributable test report:
- Confirm you have the latest report generate or generate again:
    - "allure generate ./reports/allure-report-raw -o ./reports/allure-report --clean"
- Copy the HTTP Server Node JS file into the reporting folder:
    - "cp ./allureserver.js ./reports/allure-report/allureserver.js"
- Zip contents for distribution:
    - "cd ./reports"
    - "rm ./allurereport.zip"
    - "zip -r ./allurereport.zip ./allure-report/"
    - Distribute the zip file.

## View report from zip:
- Make sure NodeJS is installed. 
- From NodeJS supported terminal navigate to where the zip file is stored and run the following:
    - "unzip allurereport.zip" *(Or manually unzip the contents)*
    - "cd allure-report"
    - "node allureserver.js"
- Open in browser: "http://127.0.0.1:8125/"


## Setup Instruction for iOS XCUITest Driver:
- http://appium.io/docs/en/drivers/ios-xcuitest-real-devices/#full-manual-configuration


## Capabilities for Android:
- Need to add capabilities to perform Android testing in wdio.conf.js:

    platformName: "Android",
    platformVersion: "6.0.1",
    deviceName: "Samsung Galaxy S7",
    browserName: 'Android',
    app: "../app-release.apk", [The cpomplete path]
    automationName: "Appium",
    appActivity: ".MainActivity"

## Capabilities for iOS:
- Need to add few more capabilities to perform iOS testing in wdio.conf.js. Lot of time the execution tests really running slow:
    
    {
  "udid": "**********",
  "bundleId": "com.racing.enterprise.alpha",
  "platformName": "iOS",
  "platformVersion": "11.4.1",
  "deviceName": "iPhoneRHM",
  "automationName": "XCUITest",
  "useJSONSource": true,
  "clearSystemFiles": true,
  "wdaStartupRetryInterval": "1000",
  "useNewWDA": true,
  "waitForQuiescence": false,
  "shouldUseSingletonTestManager": false
}