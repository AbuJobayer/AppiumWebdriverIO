import Page from './page'

class RaceReplayChannel_VideoPlayer extends Page{


/*
***  XPATH FOR VALIDATION - RACE REPLAYS CHANNEL ***
*/

    //Xpath for Race Replay Channel - Header Menu
    get raceReplayChannel_MenuHeader() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Race Replay Channel - Full Replays Tab
    get raceReplayChannel_FullReplaysTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Last 400 Tab
    get raceReplayChannel_Last400Tab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Stewards Tab
    get raceReplayChannel_StewardsTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Drone Vision Tab
    get raceReplayChannel_DroneVisionTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Race Replay Channel - Interviews Tab
    get raceReplayChannel_InterviewsTab() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.widget.TextView");}

    //X Axis for Stewards Tab
    get xAxis_raceReplayChannel_StewardsTab(){return browser.getLocation('//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView', 'x');}

    //Xpath for Back button
    get backButton() {return browser.element("//android.widget.Button/android.view.ViewGroup/android.widget.ImageView");}



/*
***  METHODS FOR NAVIGATION - RACE REPLAYS CHANNEL  ***
*/

    open(){
        super.open('path');
    }

    // Click on the Last 400 Tab 
    click_raceReplayChannel_Last400Tab(){
        this.raceReplayChannel_Last400Tab.waitForExist();
        this.raceReplayChannel_Last400Tab.click();
    }

    // Click on the Stewards Tab 
    click_raceReplayChannel_StewardsTab(){
        this.raceReplayChannel_StewardsTab.waitForExist();
        this.raceReplayChannel_StewardsTab.click();
    }

    // Click on the Drone Vision Tab 
    click_raceReplayChannel_DroneVisionTab(){
        this.raceReplayChannel_DroneVisionTab.waitForExist();
        this.raceReplayChannel_DroneVisionTab.click();
    }

    // Click on the Interviews Tab 
    click_raceReplayChannel_InterviewsTab(){
        this.raceReplayChannel_InterviewsTab.waitForExist();
        this.raceReplayChannel_InterviewsTab.click();
    }

    //Move the Stewards tab Left
    move_StewardsTabsLeft(){
        this.raceReplayChannel_StewardsTab.waitForExist();
        this.raceReplayChannel_StewardsTab.pause(3000);
        browser.touchAction('//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView', 
        ['longPress', {action: 'moveTo', x: (this.xAxis_raceReplayChannel_StewardsTab-200), y: 0}, 'release'
        ])
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
    waitFor_raceReplayChannel_MenuHeader() {
        if(!this.raceReplayChannel_MenuHeader.isVisible()){
        this.raceReplayChannel_MenuHeader.waitForVisible(5000);
        }
    }
    check_raceReplayChannel_MenuHeader(){
        const Content_raceReplayChannel_MenuHeader = this.raceReplayChannel_MenuHeader.getText();
        expect(Content_raceReplayChannel_MenuHeader).to.equal('Race Replays');
    }

    // Check Race Replays Channel - Full Replays Tab
    waitFor_raceReplayChannel_FullReplaysTab() {
        if(!this.raceReplayChannel_FullReplaysTab.isVisible()){
        this.raceReplayChannel_FullReplaysTab.waitForVisible(5000);
        }
    }
    check_raceReplayChannel_FullReplaysTab(){
        const Content_raceReplayChannel_FullReplaysTab = this.raceReplayChannel_FullReplaysTab.getText();
        expect(Content_raceReplayChannel_FullReplaysTab).to.equal('Full Replays');
    }

    // Check Race Replays Channel - Last 400 Tab
    waitFor_raceReplayChannel_Last400Tab() {
        if(!this.raceReplayChannel_Last400Tab.isVisible()){
        this.raceReplayChannel_Last400Tab.waitForVisible(5000);
        }
    }
    check_raceReplayChannel_Last400Tab(){
        const Content_raceReplayChannel_Last400Tab = this.raceReplayChannel_Last400Tab.getText();
        expect(Content_raceReplayChannel_Last400Tab).to.equal('Last 400');
    }

    // Check Race Replays Channel - Stewards Tab
    waitFor_raceReplayChannel_StewardsTab() {
        if(!this.raceReplayChannel_StewardsTab.isVisible()){
        this.raceReplayChannel_StewardsTab.waitForVisible(5000);
        }
    }
    check_raceReplayChannel_StewardsTab(){
        const Content_raceReplayChannel_StewardsTab = this.raceReplayChannel_StewardsTab.getText();
        expect(Content_raceReplayChannel_StewardsTab).to.equal('Stewards');
    }

    // Check Race Replays Channel - Drone Vision Tab
    waitFor_raceReplayChannel_DroneVisionTab() {
        if(!this.raceReplayChannel_DroneVisionTab.isVisible()){
        this.raceReplayChannel_DroneVisionTab.waitForVisible(5000);
        }
    }
    check_raceReplayChannel_DroneVisionTab(){
        const Content_raceReplayChannel_DroneVisionTab = this.raceReplayChannel_DroneVisionTab.getText();
        expect(Content_raceReplayChannel_DroneVisionTab).to.equal('Drone Vision');
    }

    // Check Race Replays Channel - Interviews Tab
    waitFor_raceReplayChannel_InterviewsTab() {
        if(!this.raceReplayChannel_InterviewsTab.isVisible()){
        this.raceReplayChannel_InterviewsTab.waitForVisible(5000);
        }
    }
    check_raceReplayChannel_InterviewsTab(){
        const Content_raceReplayChannel_InterviewsTab = this.raceReplayChannel_InterviewsTab.getText();
        expect(Content_raceReplayChannel_InterviewsTab).to.equal('Interviews');
    }









}

export default new RaceReplayChannel_VideoPlayer();