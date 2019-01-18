import Page from './page'

class ViewMorePostRaceInterviewsTab extends Page{


/*
***  XPATH FOR VALIDATION - RACE REPLAYS CHANNEL ***
*/

    //Xpath for Race Replay Channel - Header Menu
    get viewMorePostRaceInterviewsTab_MenuHeader() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Race Replay Channel - Race Replays Tab
    get viewMorePostRaceInterviewsTab_RaceReplaysTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Stewards Tab
    get viewMorePostRaceInterviewsTab_StewardsTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Trials Tab
    get viewMorePostRaceInterviewsTab_TrialsTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Trials Tab
    get viewMorePostRaceInterviewsTab_PostRaceInterview() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView");}

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
    waitFor_viewMorePostRaceInterviewsTab_MenuHeader() {
        if(!this.viewMorePostRaceInterviewsTab_MenuHeader.isVisible()){
        this.viewMorePostRaceInterviewsTab_MenuHeader.waitForVisible(5000);
        }
    }
    check_viewMorePostRaceInterviewsTab_MenuHeader(){
        const Content_viewMorePostRaceInterviewsTab_MenuHeader = this.viewMorePostRaceInterviewsTab_MenuHeader.getText();
        expect(Content_viewMorePostRaceInterviewsTab_MenuHeader).to.equal('Race Replays');
    }

    // Check Race Replays Channel - Race Replays Tab
    waitFor_viewMorePostRaceInterviewsTab_RaceReplaysTab() {
        if(!this.viewMorePostRaceInterviewsTab_RaceReplaysTab.isVisible()){
        this.viewMorePostRaceInterviewsTab_RaceReplaysTab.waitForVisible(5000);
        }
    }
    check_viewMorePostRaceInterviewsTab_RaceReplaysTab(){
        const Content_viewMorePostRaceInterviewsTab_RaceReplaysTab = this.viewMorePostRaceInterviewsTab_RaceReplaysTab.getText();
        expect(Content_viewMorePostRaceInterviewsTab_RaceReplaysTab).to.equal('Race Replays');
    }

    // Check Race Replays Channel - Stewards Tab
    waitFor_viewMorePostRaceInterviewsTab_StewardsTab() {
        if(!this.viewMorePostRaceInterviewsTab_StewardsTab.isVisible()){
        this.viewMorePostRaceInterviewsTab_StewardsTab.waitForVisible(5000);
        }
    }
    check_viewMorePostRaceInterviewsTab_StewardsTab(){
        const Content_viewMorePostRaceInterviewsTab_StewardsTab = this.viewMorePostRaceInterviewsTab_StewardsTab.getText();
        expect(Content_viewMorePostRaceInterviewsTab_StewardsTab).to.equal('Stewards');
    }

    // Check Race Replays Channel - Trials Tab
    waitFor_viewMorePostRaceInterviewsTab_TrialsTab() {
        if(!this.viewMorePostRaceInterviewsTab_TrialsTab.isVisible()){
        this.viewMorePostRaceInterviewsTab_TrialsTab.waitForVisible(5000);
        }
    }
    check_viewMorePostRaceInterviewsTab_TrialsTab(){
        const Content_viewMorePostRaceInterviewsTab_TrialsTab = this.viewMorePostRaceInterviewsTab_TrialsTab.getText();
        expect(Content_viewMorePostRaceInterviewsTab_TrialsTab).to.equal('Trials');
    }

    // Check Race Replays Channel - Post Race Interview Tab
    waitFor_viewMorePostRaceInterviewsTab_PostRaceInterview() {
        if(!this.viewMorePostRaceInterviewsTab_PostRaceInterview.isVisible()){
        this.viewMorePostRaceInterviewsTab_PostRaceInterview.waitForVisible(5000);
        }
    }
    check_viewMorePostRaceInterviewsTab_PostRaceInterview(){
        const Content_viewMorePostRaceInterviewsTab_PostRaceInterview = this.viewMorePostRaceInterviewsTab_PostRaceInterview.getText();
        expect(Content_viewMorePostRaceInterviewsTab_PostRaceInterview).to.equal('Post Race Interview');
    } 
}

export default new ViewMorePostRaceInterviewsTab();