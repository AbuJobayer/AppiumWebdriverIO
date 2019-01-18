import Page from './page';

class Homescreen extends Page {

    //Xpath for the hockeyapp update window
    get hockeyUpdateWindow() { return browser.element("//android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]");}

    //Xpath for News Link
    get newsLink() {return browser.element('//XCUIElementTypeOther[@name="a a News"]');}
    
    //Xpath for Race Result
    get Homescreen_RaceResult() {return browser.element("//XCUIElementTypeOther[@name='z RACE RESULTS']");}

    //Xpath for Race Result
    get Homescreen_TVShows() {return browser.element("(//XCUIElementTypeOther[@name='0 TV SHOWS'])[2]");}









    open(){
        super.open('path');
    }
/*
    // Ignore update
    closeHockeyPopup(){
        this.hockeyUpdateWindow.waitForExist(10000);
        this.hockeyUpdateWindow.click();
    }
*/

    //Ignore update
    ignoreUpdate(){
        browser.pause(9000);
        //Looking for the Ignore button
        if (browser.isExisting('//android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]'))
        {
            browser.click('//android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]');
        }
        else
        {
            console.log("No update");
        }
}



    // Click on the News link
    clickNewsLink(){
        this.newsLink.waitForExist();
        this.newsLink.click();
    }

    // Click on the Race Result
    click_Homescreen_RaceResult(){
        this.Homescreen_RaceResult.waitForExist();
        this.Homescreen_RaceResult.click();
    }

    // Click on the TV Show
    click_Homescreen_TVShows(){
        this.Homescreen_TVShows.waitForExist();
        this.Homescreen_TVShows.click();
    }


}

export default new Homescreen();