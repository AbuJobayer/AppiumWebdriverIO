import Page from './page'

class VideoPopup extends Page{

    //Xpath for Watch Live Button
    get watchLiveButton() {return browser.element("//android.widget.TextView[@text='Watch Live'][1]");}

    //Xpath for Minimize Button
    get minimizeButton() {return browser.element("//android.widget.TextView[@text='T'][1]");}

     //Xpath for Close Button
     get closeButton() {return browser.element("//android.widget.TextView[@text='*']");}


    /*
    BLACKBOOK RELATED XPATH
    */


     //Xpath for BB Tag Popup Done Button
     get doneButton() {return browser.element("//android.view.ViewGroup/android.widget.TextView");}

     //Xpath for Remove Black Button
     get removeBlackbookButton() {return browser.element("//android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[1]");}

     //Xpath for Yes Button
     get yesButton() {return browser.element("//android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]");}





     open(){
        super.open('path');
    }

    //Click on the Watch Live Button
    clikWatchLiveButton(){
        //this.watchLiveButton.waitForExist();
        this.watchLiveButton.click();
    }

    //Click on the minimize button
    clickMinimizeButton(){
        this.minimizeButton.waitForExist();
        //this.minimizeButton.pause(3000);
        this.minimizeButton.click();
    }

    //Click on the Close Button
    clickCloseButton(){
       this.closeButton.waitForExist();
    this.closeButton.click();
    }


/*
BLACKBOOK RELATED METHODS
*/

    //Click Done Button for BB Tag Pop Up
    clickDoneButton(){
       // this.doneButton.waitForExist();
        this.doneButton.click();
    }

    //Click Remove Blackbook Button for confirmation
    click_removeBlackbookButton(){
        //this.removeBlackbookButton.waitForExist();
        this.removeBlackbookButton.click();
    }

    //Click Yes Button for confirmation
    click_yesButton(){
        //this.yesButton.waitForExist();
        this.yesButton.click();
    }

/*
UTILITY METHODS
*/   

    //Get the XML Source of the app
    get_AppPageSource(){
        browser.source();
    }

    //Use Back Key from mobile
    goback_MobileApp(){
        browser.back();
    }

    //Take screenshot of the App
    takeScreenshot(){
        browser.screenshot();
    }


    // Close the app
    closeApp(){
        browser.closeApp();
    }


    refreshUI(){
        browser.refresh();
    }



    
}


export default new VideoPopup();