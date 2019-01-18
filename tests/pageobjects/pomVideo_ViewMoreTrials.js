import Page from './page'

class ViewMoreTrialsTab extends Page{


/*
***  XPATH FOR VALIDATION - RACE REPLAYS CHANNEL ***
*/

    //Xpath for Race Replay Channel - Header Menu
    get viewMoreTrialsTab_MenuHeader() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Race Replay Channel - Race Replays Tab
    get viewMoreTrialsTab_RaceReplaysTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Stewards Tab
    get viewMoreTrialsTab_StewardsTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Trials Tab
    get viewMoreTrialsTab_TrialsTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Trials Tab
    get viewMoreTrialsTab_PostRaceInterview() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Back button
    get backButton() {return browser.element("//android.widget.Button/android.view.ViewGroup/android.widget.ImageView");}



/*
***  METHODS FOR NAVIGATION - RACE REPLAYS CHANNEL  ***
*/

    open(){
        super.open('path');
    }

    
    //Click on the Back Button
    clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
    }


/*
***  METHODS FOR VALIDATION - RACE REPLAY CHANNEL - GENERIC ***
*/

    // Check Race Replays Channel - Menu Header
    waitFor_viewMoreTrialsTab_MenuHeader() {
        if(!this.viewMoreTrialsTab_MenuHeader.isVisible()){
        this.viewMoreTrialsTab_MenuHeader.waitForVisible(5000);
        }
    }
    check_viewMoreTrialsTab_MenuHeader(){
        const Content_viewMoreTrialsTab_MenuHeader = this.viewMoreTrialsTab_MenuHeader.getText();
        expect(Content_viewMoreTrialsTab_MenuHeader).to.equal('Race Replays');
    }

    // Check Race Replays Channel - Race Replays Tab
    waitFor_viewMoreTrialsTab_RaceReplaysTab() {
        if(!this.viewMoreTrialsTab_RaceReplaysTab.isVisible()){
        this.viewMoreTrialsTab_RaceReplaysTab.waitForVisible(5000);
        }
    }
    check_viewMoreTrialsTab_RaceReplaysTab(){
        const Content_viewMoreTrialsTab_RaceReplaysTab = this.viewMoreTrialsTab_RaceReplaysTab.getText();
        expect(Content_viewMoreTrialsTab_RaceReplaysTab).to.equal('Race Replays');
    }

    // Check Race Replays Channel - Stewards Tab
    waitFor_viewMoreTrialsTab_StewardsTab() {
        if(!this.viewMoreTrialsTab_StewardsTab.isVisible()){
        this.viewMoreTrialsTab_StewardsTab.waitForVisible(5000);
        }
    }
    check_viewMoreTrialsTab_StewardsTab(){
        const Content_viewMoreTrialsTab_StewardsTab = this.viewMoreTrialsTab_StewardsTab.getText();
        expect(Content_viewMoreTrialsTab_StewardsTab).to.equal('Stewards');
    }

    // Check Race Replays Channel - Trials Tab
    waitFor_viewMoreTrialsTab_TrialsTab() {
        if(!this.viewMoreTrialsTab_TrialsTab.isVisible()){
        this.viewMoreTrialsTab_TrialsTab.waitForVisible(5000);
        }
    }
    check_viewMoreTrialsTab_TrialsTab(){
        const Content_viewMoreTrialsTab_TrialsTab = this.viewMoreTrialsTab_TrialsTab.getText();
        expect(Content_viewMoreTrialsTab_TrialsTab).to.equal('Trials');
    }

    // Check Race Replays Channel - Post Race Interview Tab
    waitFor_viewMoreTrialsTab_PostRaceInterview() {
        if(!this.viewMoreTrialsTab_PostRaceInterview.isVisible()){
        this.viewMoreTrialsTab_PostRaceInterview.waitForVisible(5000);
        }
    }
    check_viewMoreTrialsTab_PostRaceInterview(){
        const Content_viewMoreTrialsTab_PostRaceInterview = this.viewMoreTrialsTab_PostRaceInterview.getText();
        expect(Content_viewMoreTrialsTab_PostRaceInterview).to.equal('Post Race Interview');
    }

    
}

export default new ViewMoreTrialsTab();