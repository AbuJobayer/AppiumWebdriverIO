import Page from './page'

class VideoPopup extends Page{

    //Xpath for Watch Live Button
    get watchLiveButton() {return browser.element('(//XCUIElementTypeOther[@name="Watch Live"])[1]');}

    //Xpath for Minimize Button
    get minimizeButton() {return browser.element('(//XCUIElementTypeOther[@name="T"])[1]');}

    //Xpath for Close Button
    get closeButton() {return browser.element('(//XCUIElementTypeOther[@name="h"])[1]');}

     open(){
        super.open('path');
    }

    //Click on the Watch Live Button
    clikWatchLiveButton(){
        this.watchLiveButton.waitForExist();
        this.watchLiveButton.click();
    }

    //Click on the minimize button
    clickMinimizeButton(){
        this.minimizeButton.waitForExist();
        this.minimizeButton.pause(3000);
        this.minimizeButton.click();
    }

    //Click on the Close Button
    clickCloseButton(){
        this.closeButton.waitForExist();
        this.closeButton.click();
    }

    
}

export default new VideoPopup();