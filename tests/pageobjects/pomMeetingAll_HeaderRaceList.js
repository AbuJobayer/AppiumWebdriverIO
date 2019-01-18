import Page from './page'

class MeetingAllPage_HeaderRaceList extends Page{
/*
***  XPATH FOR MEETING CARD ALL - NAVIGATION  *** 
*/

    //Xpath for Expert Tips Tab
    get expertTipsTab() {return browser.element("~Expert Tips");}

    //Xpath for Overview Tab
    get overviewTab() {return browser.element("~Overview");}

    //Xpath for Runners Tab
    get runnerTab() {return browser.element("~Runners");}
        
    //X Axis for Overview Tab
    get X_Axis1_OverviewTab(){return browser.getLocation('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]', 'x');}

    //Xpath for Runners Tab
    get newsVideoTab() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[5]");}
    
    //Xpath for Race List Tab
    get raceListTab() {return browser.element("~Race List");}

    //Xpath for Race Runner Toggle ON
    get raceRunnerToggleON() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[3]");}

    //Xpath for Race Runner Toggle OFF
    get raceRunnerToggleOFF() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Xpath for 1st Race
    get firstRaceTile() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]");}

    //Xpath for Back button
    get backButton() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}

    //Xpath for Meeting  - Runners Tab - 1st Horse
    get meetingAll_Runners_1stHorse() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.Button[1]/android.view.ViewGroup");}

    //Xpath for Meeting Header All Button
    get meetinhHeader_AllButton() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.widget.Button[1]");}

    //Xpath for Meeting All - Race List - 1st Horse from the list
    get meetingAll_RaceList_1stHrose() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button/android.view.ViewGroup[2]/android.widget.Button[1]");}


/*
***  XPATH FOR MEETING CARD ALL - HEADER  *** 
*/

    //Xpath for Meeting Card All - Header - Date
    get meetingHeader_Date() {return browser.element("//android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Xpath for Meeting Card All - Header - Weather
    get meetingHeader_Weather() {return browser.element("//android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]");}

    //Xpath for Meeting Card All - Header - Track Condition
    get meetingHeader_TrackCondition() {return browser.element("//android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[3]");}


/*
***  XPATH FOR MEETING CARD ALL - Race List Tab  *** 
*/

    //Xpath for Meeting Card All - Race List Tab - Race No
    get meetingRaceList_RaceNo() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Xpath for Meeting Card All - Race List Tab - Race Title
    get meetingRaceList_RaceTitle() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[2]");}

    //Xpath for Meeting Card All - Race List Tab - Race Status
    get meetingRaceList_RaceStatus() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]");}

    //Xpath for Meeting Card All - Race List Tab - Race Runner Toggle Button
    get meetingRaceList_RaceRunnerToggle() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup");}

    //Xpath for Meeting Card All - Race List Tab - Race Content
    get meetingRaceList_RaceContent() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[2]");}

    //Xpath for Meeting Card All - Race List Tab - 1st Blackbook Tag
    get meetingRaceList_1stBlackbookTag() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button/android.view.ViewGroup[2]/android.widget.Button[1]/android.widget.Button");}





/*
***  METHODS FOR MEETING CARD ALL - NAVIGATION  *** 
*/

    open(){
        super.open('path');
    }

    // Move the Tab Header to the LEFT
    move_TabsHeaderLeft(){
        this.overviewTab.waitForExist();
        this.overviewTab.pause(3000);

        browser.touchAction('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]', 
        ['longPress', {action: 'moveTo', x: (this.X_Axis1_OverviewTab-100), y: 0}, 'release'
        ])
    }

     //Click the Expert Tips Tab
     clickExpertTipsTab(){
        this.expertTipsTab.waitForExist();
        this.expertTipsTab.click();
     }

    //Click the Overview Tab
    clickOverviewTab(){
        this.overviewTab.waitForExist();
        this.overviewTab.click();
     }

    //Click the Runners Tab
    clickRunnerTab(){
        this.runnerTab.waitForExist();
        this.runnerTab.click();
     }

     //Click on the news & video tab
     clickNewsVideoTab(){
         this.newsVideoTab.waitForExist();
         this.newsVideoTab.click();
     }

    //Click the Race List Tab
    clickRaceListTab(){
        this.raceListTab.waitForExist();
        this.raceListTab.click();
     }

    //Turn On the Race runner toggle button
    clickRaceRunnerToggleON(){
        this.raceRunnerToggleON.waitForExist();
        this.raceRunnerToggleON.click();
     }

    //Turn Off the Race runner toggle button
    clickRaceRunnerToggleOFF(){
        this.raceRunnerToggleOFF.waitForExist();
        this.raceRunnerToggleOFF.click();
     }

    //Click on the 1st Blackbook tag from the Race List
    click_meetingRaceList_1stBlackbookTag(){
        this.meetingRaceList_1stBlackbookTag.waitForExist();
        this.meetingRaceList_1stBlackbookTag.click();
     }     

    //Open the 1st Race from the list
    clickFirstRaceTile(){
        this.firstRaceTile.waitForExist();
        this.firstRaceTile.click();
     }

    //Open the 1st Race from the list
    clickFirstRaceTile(){
        this.firstRaceTile.waitForExist();
        this.firstRaceTile.click();
     }

    //Click the Back Button
    clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
        }

    //Click the Meeting All - Runners Tab - 1st Horse
    click_meetingAll_Runners_1stHorse(){
        this.meetingAll_Runners_1stHorse.waitForExist();
        this.meetingAll_Runners_1stHorse.click();
        }

    //Click the Meeting Header - All Button
    click_meetinhHeader_AllButton(){
        this.meetinhHeader_AllButton.waitForExist();
        this.meetinhHeader_AllButton.click();
        }


    //Click the Meeting All - Race List - 1st Horse from the list
    click_meetingAll_RaceList_1stHrose(){
        this.meetingAll_RaceList_1stHrose.waitForExist();
        this.meetingAll_RaceList_1stHrose.click();
        }





/*
***  METHODS FOR VALIDATING MEETING CARD ALL - HEADER  *** 
*/

    // Check Meeting Card All - Header - Date
    waitFor_meetingHeader_Date() {
        if(!this.meetingHeader_Date.isVisible()){
        this.meetingHeader_Date.waitForVisible(5000);
        }
    }
    check_meetingHeader_Date(){
    expect(this.meetingHeader_Date.isExisting()).to.equal(true);
    }

    // Check Meeting Card All - Header - Weather
    waitFor_meetingHeader_Weather() {
        if(!this.meetingHeader_Weather.isVisible()){
        this.meetingHeader_Weather.waitForVisible(5000);
        }
    }
    check_meetingHeader_Weather(){
    expect(this.meetingHeader_Weather.isExisting()).to.equal(true);
    }

    // Check Meeting Card All - Header - Track Condition
    waitFor_meetingHeader_TrackCondition() {
        if(!this.meetingHeader_TrackCondition.isVisible()){
        this.meetingHeader_TrackCondition.waitForVisible(5000);
        }
    }
    check_meetingHeader_TrackCondition(){
    expect(this.meetingHeader_TrackCondition.isExisting()).to.equal(true);
    }

    // Check Meeting Card All - Race List - Race No
    waitFor_meetingRaceList_RaceNo() {
        if(!this.meetingRaceList_RaceNo.isVisible()){
        this.meetingRaceList_RaceNo.waitForVisible(5000);
        }
    }
    check_meetingRaceList_RaceNo(){
    expect(this.meetingRaceList_RaceNo.isExisting()).to.equal(true);
    }

    // Check Meeting Card All - Race List - Race Title
    waitFor_meetingRaceList_RaceTitle() {
        if(!this.meetingRaceList_RaceTitle.isVisible()){
        this.meetingRaceList_RaceTitle.waitForVisible(5000);
        }
    }
    check_meetingRaceList_RaceTitle(){
    expect(this.meetingRaceList_RaceTitle.isExisting()).to.equal(true);
    }

    // Check Meeting Card All - Race List - Race Content
    waitFor_meetingRaceList_RaceContent() {
        if(!this.meetingRaceList_RaceContent.isVisible()){
        this.meetingRaceList_RaceContent.waitForVisible(5000);
        }
    }
    check_meetingRaceList_RaceContent(){
    expect(this.meetingRaceList_RaceContent.isExisting()).to.equal(true);
    }

    // Check Meeting Card All - Race List - Race Runner Toggle
    waitFor_meetingRaceList_RaceRunnerToggle() {
        if(!this.meetingRaceList_RaceRunnerToggle.isVisible()){
        this.meetingRaceList_RaceRunnerToggle.waitForVisible(5000);
        }
    }
    check_meetingRaceList_RaceRunnerToggle(){
    expect(this.meetingRaceList_RaceRunnerToggle.isExisting()).to.equal(true);
    }

    // Check Meeting Card All - Race List - Race Status
    waitFor_meetingRaceList_RaceStatus() {
        if(!this.meetingRaceList_RaceStatus.isVisible()){
        this.meetingRaceList_RaceStatus.waitForVisible(5000);
        }
    }
    check_meetingRaceList_RaceStatus(){
    expect(this.meetingRaceList_RaceStatus.isExisting()).to.equal(true);
    }

}

export default new MeetingAllPage_HeaderRaceList();