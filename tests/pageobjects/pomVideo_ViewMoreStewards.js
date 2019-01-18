import Page from './page'

class ViewMoreStewardsTab extends Page{


/*
***  XPATH FOR VALIDATION - RACE REPLAYS CHANNEL ***
*/

    //Xpath for Race Replay Channel - Header Menu
    get viewMoreStewardsTab_MenuHeader() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Race Replay Channel - Race Replays Tab
    get viewMoreStewardsTab_RaceReplaysTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Stewards Tab
    get viewMoreStewardsTab_StewardsTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Trials Tab
    get viewMoreStewardsTab_TrialsTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Trials Tab
    get viewMoreStewardsTab_PostRaceInterview() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView");}

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
    waitFor_viewMoreStewardsTab_MenuHeader() {
        if(!this.viewMoreStewardsTab_MenuHeader.isVisible()){
        this.viewMoreStewardsTab_MenuHeader.waitForVisible(5000);
        }
    }
    check_viewMoreStewardsTab_MenuHeader(){
        const Content_viewMoreStewardsTab_MenuHeader = this.viewMoreStewardsTab_MenuHeader.getText();
        expect(Content_viewMoreStewardsTab_MenuHeader).to.equal('Race Replays');
    }

    // Check Race Replays Channel - Race Replays Tab
    waitFor_viewMoreStewardsTab_RaceReplaysTab() {
        if(!this.viewMoreStewardsTab_RaceReplaysTab.isVisible()){
        this.viewMoreStewardsTab_RaceReplaysTab.waitForVisible(5000);
        }
    }
    check_viewMoreStewardsTab_RaceReplaysTab(){
        const Content_viewMoreStewardsTab_RaceReplaysTab = this.viewMoreStewardsTab_RaceReplaysTab.getText();
        expect(Content_viewMoreStewardsTab_RaceReplaysTab).to.equal('Race Replays');
    }

    // Check Race Replays Channel - Stewards Tab
    waitFor_viewMoreStewardsTab_StewardsTab() {
        if(!this.viewMoreStewardsTab_StewardsTab.isVisible()){
        this.viewMoreStewardsTab_StewardsTab.waitForVisible(5000);
        }
    }
    check_viewMoreStewardsTab_StewardsTab(){
        const Content_viewMoreStewardsTab_StewardsTab = this.viewMoreStewardsTab_StewardsTab.getText();
        expect(Content_viewMoreStewardsTab_StewardsTab).to.equal('Stewards');
    }

    // Check Race Replays Channel - Trials Tab
    waitFor_viewMoreStewardsTab_TrialsTab() {
        if(!this.viewMoreStewardsTab_TrialsTab.isVisible()){
        this.viewMoreStewardsTab_TrialsTab.waitForVisible(5000);
        }
    }
    check_viewMoreStewardsTab_TrialsTab(){
        const Content_viewMoreStewardsTab_TrialsTab = this.viewMoreStewardsTab_TrialsTab.getText();
        expect(Content_viewMoreStewardsTab_TrialsTab).to.equal('Trials');
    }

    // Check Race Replays Channel - Post Race Interview Tab
    waitFor_viewMoreStewardsTab_PostRaceInterview() {
        if(!this.viewMoreStewardsTab_PostRaceInterview.isVisible()){
        this.viewMoreStewardsTab_PostRaceInterview.waitForVisible(5000);
        }
    }
    check_viewMoreStewardsTab_PostRaceInterview(){
        const Content_viewMoreStewardsTab_PostRaceInterview = this.viewMoreStewardsTab_PostRaceInterview.getText();
        expect(Content_viewMoreStewardsTab_PostRaceInterview).to.equal('Post Race Interview');
    }

    
}

export default new ViewMoreStewardsTab();