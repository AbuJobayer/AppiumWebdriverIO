import Page from './page'

class MeetingOnePage extends Page{

    //Xpath for Meeting - ALL button
    get meetingOne_AllButton() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView");}
    
    //Xpath for BB Button inside the 1st Race
    get bbButtonInside() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for 1st Horse
    get firstHorseTile() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.Button");}

    //Xpath for Stewards Report Tab
    get stewardsReportTab() {return browser.element("//android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]");}

    //Accessibility id for News & Video Tab
    get newsVideoTab() {return browser.element("~News & Video");}

    //Accessibility id for Race Overview Tab
    get raceOverviewTab() {return browser.element("~Race Overview");}

    //Xpath for Form Tab
    get formTab() {return browser.element("~Form");}

    //Xpath for Expert Tips Tab
    get expertTipsTab() {return browser.element("~Expert Tips");}

    //Xpath for Expert Tips Tab
    get expertTips_1stHorse() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button[1]");}

    //Xpath for Result Tab - Full Replay Button
    get meetingOne_ResultTab_FullReplayButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.Button[1]");}



    //Xpath for Back button
    get backButton() {return browser.element("//android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]");}

    //X Axis for News & Video Tab
    get X_Axis_NewsVideoTab(){return browser.getLocation('~News & Video', 'x');}


    open(){
        super.open('path');
    }


    // Move the Tab Header to the LEFT
    move_TabsHeaderRight(){
        this.newsVideoTab.waitForExist();
        this.newsVideoTab.pause(3000);
        browser.touchAction('~News & Video', 
        ['longPress', {action: 'moveTo', x: (this.X_Axis_NewsVideoTab+50), y: 0}, 'release'
        ])
    }

    //Click on the ALL Button
    click_meetingOne_AllButton(){
        this.meetingOne_AllButton.waitForExist();
        this.meetingOne_AllButton.click();
        }

    //Click on Result Tab - Full Replay Button
    click_meetingOne_ResultTab_FullReplayButton(){
        this.meetingOne_ResultTab_FullReplayButton.waitForExist();
        this.meetingOne_ResultTab_FullReplayButton.click();
        }

    //Click on the Expert Tips Tab
    click_expertTipsTab(){
        this.expertTipsTab.waitForExist();
        this.expertTipsTab.click();
        }

    //Click on the Expert Tips Tab - 1st Horse
    click_expertTips_1stHorse(){
        this.expertTips_1stHorse.waitForExist();
        this.expertTips_1stHorse.click();
        }
        


    //Click the BB Button inside the Horse Tile
    clickInsideBBButton(){
        this.bbButtonInside.waitForExist();
        this.bbButtonInside.click();
        }

    //Click the fist Horse tile
    clickFirstHorseTile(){
        this.firstHorseTile.waitForExist();
        this.firstHorseTile.click();
        }

    //Click the Stewards Report tab
    clickStewardsReportTab(){
        this.stewardsReportTab.waitForExist();
        this.stewardsReportTab.click();
        }

    //Click the News & Video tab
    clickNews_VideoTab(){
        this.newsVideoTab.waitForExist();
        this.newsVideoTab.click();
        }

    //Click the RaceOverview tab
    clickRaceOverviewTab(){
        this.raceOverviewTab.waitForExist();
        this.raceOverviewTab.click();
        }

    //Click the Form tab
    clickFormTab(){
        this.formTab.waitForExist();
        this.formTab.click();
        }   

    //Click the Back Button
    clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
        }
}

export default new MeetingOnePage();