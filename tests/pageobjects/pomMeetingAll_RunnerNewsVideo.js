import Page from './page'

class MeetingAllPage_RunnerNewsVideo extends Page{
/*
***  XPATH FOR MEETING CARD ALL - NAVIGATION  *** 
*/

     
    //X Axis for Overview Tab
    get X_Axis1_OverviewTab(){return browser.getLocation('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]', 'x');}

    //Xpath for Runners Tab
    get newsVideoTab() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[5]");}
    
    //Xpath for Race List Tab
    get raceListTab() {return browser.element("~Race List");}

    //Xpath for Back button
    get backButton() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}

    //Xpath for Overview Tab
    get overviewTab() {return browser.element("~Overview");}


/*
***  XPATH FOR MEETING CARD ALL - RANNERS TAB  *** 
*/

    //Xpath for Meeting Card All - Runner Tab - Silk Image
    get meetingRunners_SilkImage() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView");}

    //Xpath for Meeting Card All - Runner Tab - Horse Info
    get meetingRunners_HorseInfo() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView");}

    //Xpath for Meeting Card All - Runner Tab - Trainer
    get meetingRunners_Trainer() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.TextView[2]");}

    //Xpath for Meeting Card All - Runner Tab - Jockey
    get meetingRunners_Jockey() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.TextView[4]");}

    //Xpath for Meeting Card All - Runner Tab - BB Tag
    get meetingRunners_BBTag() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]");}

    //Xpath for Meeting Card All - Runner Tab - Race No
    get meetingRunners_RaceNo() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Meeting Card All - Runner Tab - Location Code
    get meetingRunners_LocationCode() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[2]");}

    //Xpath for Meeting Card All - Runner Tab - Track Distance
    get meetingRunners_TrackDistance() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[3]");}

    //Xpath for Meeting Card All - Runner Tab - Race Time
    get meetingRunners_RaceTime() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[4]");}

    //Xpath for Meeting Card All - Runner Tab - Jockey Weight
    get meetingRunners_JockeyWeight() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[5]");}

    //Xpath for Meeting Card All - Runner Tab - Arrow Button
    get meetingRunners_ArrowButton() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[6]");}



/*
***  XPATH FOR MEETING CARD ALL - NEWS & VIDEO TAB  *** 
*/
 
    //Xpath for Meeting Card All - News & Video Tab - First Content
    get meetingNewsVideo_FirstContent() {return browser.element("//android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup");}

    //Xpath for Meeting Card All - News & Video Tab - Content Thumbimage
    get meetingNewsVideo_ContentThumbImage() {return browser.element("//android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Xpath for Meeting Card All - News & Video Tab - Content Title
    get meetingNewsVideo_ContentTitle() {return browser.element("//android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Meeting Card All - News & Video Tab - Content Date
    get meetingNewsVideo_ContentDate() {return browser.element("//android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[2]");}



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


/*
***  METHODS FOR VALIDATING MEETING ALL CARD - RUNNERS TAB  *** 
*/

    // Check Meeting All Card - Runners - Silk Image
    waitFor_meetingRunners_SilkImage() {
        if(!this.meetingRunners_SilkImage.isVisible()){
        this.meetingRunners_SilkImage.waitForVisible(5000);
        }
    }
    check_meetingRunners_SilkImage(){
    expect(this.meetingRunners_SilkImage.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - Runners - Horse Info
    waitFor_meetingRunners_HorseInfo() {
        if(!this.meetingRunners_HorseInfo.isVisible()){
        this.meetingRunners_HorseInfo.waitForVisible(5000);
        }
    }
    check_meetingRunners_HorseInfo(){
    expect(this.meetingRunners_HorseInfo.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - Runners - Trainer
    waitFor_meetingRunners_Trainer() {
        if(!this.meetingRunners_Trainer.isVisible()){
        this.meetingRunners_Trainer.waitForVisible(5000);
        }
    }
    check_meetingRunners_Trainer(){
    expect(this.meetingRunners_Trainer.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - Runners - Jockey
    waitFor_meetingRunners_Jockey() {
        if(!this.meetingRunners_Jockey.isVisible()){
        this.meetingRunners_Jockey.waitForVisible(5000);
        }
    }
    check_meetingRunners_Jockey(){
    expect(this.meetingRunners_Jockey.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - Runners - BB Tag
    waitFor_meetingRunners_BBTag() {
        if(!this.meetingRunners_BBTag.isVisible()){
        this.meetingRunners_BBTag.waitForVisible(5000);
        }
    }
    check_meetingRunners_BBTag(){
    expect(this.meetingRunners_BBTag.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - Runners - Race No
    waitFor_meetingRunners_RaceNo() {
        if(!this.meetingRunners_RaceNo.isVisible()){
        this.meetingRunners_RaceNo.waitForVisible(5000);
        }
    }
    check_meetingRunners_RaceNo(){
    expect(this.meetingRunners_RaceNo.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - Runners - Location Code
    waitFor_meetingRunners_LocationCode() {
        if(!this.meetingRunners_LocationCode.isVisible()){
        this.meetingRunners_LocationCode.waitForVisible(5000);
        }
    }
    check_meetingRunners_LocationCode(){
    expect(this.meetingRunners_LocationCode.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - Runners - Track Distance
    waitFor_meetingRunners_TrackDistance() {
        if(!this.meetingRunners_TrackDistance.isVisible()){
        this.meetingRunners_TrackDistance.waitForVisible(5000);
        }
    }
    check_meetingRunners_TrackDistance(){
    expect(this.meetingRunners_TrackDistance.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - Runners - Race Time
    waitFor_meetingRunners_RaceTime() {
        if(!this.meetingRunners_RaceTime.isVisible()){
        this.meetingRunners_RaceTime.waitForVisible(5000);
        }
    }
    check_meetingRunners_RaceTime(){
    expect(this.meetingRunners_RaceTime.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - Runners - Jockey Weight
    waitFor_meetingRunners_JockeyWeight() {
        if(!this.meetingRunners_JockeyWeight.isVisible()){
        this.meetingRunners_JockeyWeight.waitForVisible(5000);
        }
    }
    check_meetingRunners_JockeyWeight(){
    expect(this.meetingRunners_JockeyWeight.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - Runners - Arrow Button
    waitFor_meetingRunners_ArrowButton() {
        if(!this.meetingRunners_ArrowButton.isVisible()){
        this.meetingRunners_ArrowButton.waitForVisible(5000);
        }
    }
    check_meetingRunners_ArrowButton(){
    expect(this.meetingRunners_ArrowButton.isExisting()).to.equal(true);
    }

/*
***  METHODS FOR VALIDATING MEETING ALL CARD - NEWS & VIDEO TAB  *** 
*/


    // Check Meeting All Card - News & Video - First Content
    waitFor_meetingNewsVideo_FirstContent() {
        if(!this.meetingNewsVideo_FirstContent.isVisible()){
        this.meetingNewsVideo_FirstContent.waitForVisible(5000);
        }
    }
    check_meetingNewsVideo_FirstContent(){
    expect(this.meetingNewsVideo_FirstContent.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - News & Video - First Content
    waitFor_meetingNewsVideo_ContentThumbImage() {
        if(!this.meetingNewsVideo_ContentThumbImage.isVisible()){
        this.meetingNewsVideo_ContentThumbImage.waitForVisible(5000);
        }
    }
    check_meetingNewsVideo_ContentThumbImage(){
    expect(this.meetingNewsVideo_ContentThumbImage.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - News & Video - Content Title
    waitFor_meetingNewsVideo_ContentTitle() {
        if(!this.meetingNewsVideo_ContentTitle.isVisible()){
        this.meetingNewsVideo_ContentTitle.waitForVisible(5000);
        }
    }
    check_meetingNewsVideo_ContentTitle(){
    expect(this.meetingNewsVideo_ContentTitle.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - News & Video - Content Title
    waitFor_meetingNewsVideo_ContentTitle() {
        if(!this.meetingNewsVideo_ContentTitle.isVisible()){
        this.meetingNewsVideo_ContentTitle.waitForVisible(5000);
        }
    }
    check_meetingNewsVideo_ContentTitle(){
    expect(this.meetingNewsVideo_ContentTitle.isExisting()).to.equal(true);
    }

    // Check Meeting All Card - News & Video - Content Date
    waitFor_meetingNewsVideo_ContentDate() {
        if(!this.meetingNewsVideo_ContentDate.isVisible()){
        this.meetingNewsVideo_ContentDate.waitForVisible(5000);
        }
    }
    check_meetingNewsVideo_ContentDate(){
    expect(this.meetingNewsVideo_ContentDate.isExisting()).to.equal(true);
    }


}

export default new MeetingAllPage_RunnerNewsVideo();