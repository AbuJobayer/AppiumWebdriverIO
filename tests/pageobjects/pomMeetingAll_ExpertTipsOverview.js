import Page from './page'

class MeetingAll_ExpertTipsOverview extends Page{
/*
***  XPATH FOR MEETING CARD ALL - NAVIGATION  *** 
*/

    //Xpath for Expert Tips Tab
    get expertTipsTab() {return browser.element("~Expert Tips");}

    //Xpath for Overview Tab
    get overviewTab() {return browser.element("~Overview");}

    //Xpath for Runners Tab
    get runnerTab() {return browser.element("~Runners");}
        
    //Xpath for Runners Tab
    get newsVideoTab() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[5]");}
    
    //Xpath for Back button
    get backButton() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}


/*
***  XPATH FOR MEETING CARD ALL - EXPERT TIPS TAB  *** 
*/

//Xpath for Meeting All - Expert Tips Tab - Featured Tips
get meetingExpertTips_Header1() {return browser.element("//android.widget.TextView[@text='Featured Tips & Analysis']");}

//Xpath for Meeting All - Expert Tips Tab - Featured Tips - 1st Content
get meetingExpertTips_1stContent() {return browser.element("//android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup");}  


/*
***  XPATH FOR MEETING CARD ALL - Overview TAB  *** 
*/

//Xpath for Meeting All - Overview Tab - Track Information
get meetingOverview_TrackInformation() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]");}  

//Xpath for Meeting All - Overview Tab - Scratching
get meetingOverview_Scratchings() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]");}  

//Xpath for Meeting All - Overview Tab - Weather
get meetingOverview_Weather() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]");}

//Xpath for Meeting All - Overview Tab - Track Image
get meetingOverview_TrackImage() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[4]");}


/*
***  METHODS FOR MEETING CARD ALL - NAVIGATION  *** 
*/

    open(){
        super.open('path');
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


    //Click the Back Button
    clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
        }

/*
***  METHODS FOR VALIDATING MEETING CARD ALL - EXPERT TIPS TAB  *** 
*/

    // Check Meeting Card All - Expert Tips Featured Header
    waitFor_meetingExpertTips_Header1() {
        if(!this.meetingExpertTips_Header1.isVisible()){
        this.meetingExpertTips_Header1.waitForVisible(5000);
        }
    }
    check_meetingExpertTips_Header1(){
    expect(this.meetingExpertTips_Header1.isExisting()).to.equal(true);
    }

    // Check Meeting Card All - Expert Tips - 1st content is avlable
    waitFor_meetingExpertTips_1stContent() {
        if(!this.meetingExpertTips_1stContent.isVisible()){
        this.meetingExpertTips_1stContent.waitForVisible(5000);
        }
    }
    check_meetingExpertTips_1stContent(){
    expect(this.meetingExpertTips_1stContent.isExisting()).to.equal(true);
    }

/*
***  METHODS FOR VALIDATING MEETING CARD ALL - OVERVIEW TAB  *** 
*/

    // Check Meeting Card All - Overview Tab - Track Informaion
    waitFor_meetingOverview_TrackInformation() {
        if(!this.meetingOverview_TrackInformation.isVisible()){
        this.meetingOverview_TrackInformation.waitForVisible(5000);
        }
    }
    check_meetingOverview_TrackInformation(){
    expect(this.meetingOverview_TrackInformation.isExisting()).to.equal(true);
    }

    // Check Meeting Card All - Overview Tab - Scratching
    waitFor_meetingOverview_Scratchings() {
        if(!this.meetingOverview_Scratchings.isVisible()){
        this.meetingOverview_Scratchings.waitForVisible(5000);
        }
    }
    check_meetingOverview_Scratchings(){
    expect(this.meetingOverview_Scratchings.isExisting()).to.equal(true);
    }

    // Check Meeting Card All - Overview Tab - Weather
    waitFor_meetingOverview_Weather() {
        if(!this.meetingOverview_Weather.isVisible()){
        this.meetingOverview_Weather.waitForVisible(5000);
        }
    }
    check_meetingOverview_Weather(){
    expect(this.meetingOverview_Weather.isExisting()).to.equal(true);
    }

    // Check Meeting Card All - Overview Tab - Track Image
    waitFor_meetingOverview_TrackImage() {
        if(!this.meetingOverview_TrackImage.isVisible()){
        this.meetingOverview_TrackImage.waitForVisible(5000);
        }
    }
    check_meetingOverview_TrackImage(){
    expect(this.meetingOverview_TrackImage.isExisting()).to.equal(true);
    }

}

export default new MeetingAll_ExpertTipsOverview();