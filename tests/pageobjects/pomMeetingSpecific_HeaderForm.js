import Page from './page'

class MeetingSpecificRace_HeaderForm extends Page{

/*
**** XPATH FOR MEETING SPECIFIC RACE - NAVIGATION ****
*/

    //Xpath for BB Button inside the 1st Race
    get bbButtonInside() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for 1st Horse
    get firstHorseTile() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup");}

    //Accessibility ID for Stewards Report Tab
    get stewardsReportTab() {return browser.element("~Stewards' Report");}

    //Accessibility ID for News & Video Tab
    get newsVideoTab() {return browser.element("~News & Video");}

    //Accessibility ID for Race Overview Tab
    get raceOverviewTab() {return browser.element("~Race Overview");}

    //Accessibility ID for Result Tab
    get formTab() {return browser.element("~Form");}

    //Xpath for Back button
    get backButton() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}

    //X Axis for News & Video Tab
    get X_Axis_NewsVideoTab(){return browser.getLocation('//android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]', 'x');}



/*
**** XPATH FOR MEETING SPECIFIC RACE - HEADER ****
*/

    //Xpath for Meeting Specific Race - 2nd Race
    get raceMeetingHeader_2ndRace() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]");}

    //Xpath for Meeting Specific Race - Track Distance
    get raceMeetingHeader_TrackDistance() {return browser.element("//android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[1]");}

    //Xpath for Meeting Specific Race - Weather
    get raceMeetingHeader_Weather() {return browser.element("//android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[2]");}

    //Xpath for Meeting Specific Race - Condition
    get raceMeetingHeader_Condition() {return browser.element("//android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[3]");}

    //Xpath for Meeting Specific Race - Time
    get raceMeetingHeader_Time() {return browser.element("//android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup[4]");}

    //Xpath for Meeting Specific Race - Race Code
    get raceMeetingHeader_RaceCode() {return browser.element("//android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup");}



/*
**** XPATH FOR MEETING SPECIFIC RACE - FORM TAB ****
*/

    //Xpath for Meeting Specific Race - Form Tab - Jersey
    get raceMeetingForm_Jersey() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView");}

    //Xpath for Meeting Specific Race - Form Tab - Horse
    get raceMeetingForm_Horse() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView");}

    //Xpath for Meeting Specific Race - Form Tab - Trainer
    get raceMeetingForm_Trainer() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.TextView[2]");}

    //Xpath for Meeting Specific Race - Form Tab - Jockey
    get raceMeetingForm_Jockey() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.TextView[4]");}

    //Xpath for Meeting Specific Race - Form Tab - BB Tag
    get raceMeetingForm_BBTag() {return browser.element("//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.widget.TextView");}



/*
**** METHODS FOR MEETING SPECIFIC RACE - NAVIGATION ****
*/

    open(){
        super.open('path');
    }


    // Move the Tab Header to the LEFT
    move_TabsHeaderRight(){
        this.newsVideoTab.waitForExist();
        this.newsVideoTab.pause(3000);
        browser.touchAction('//android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]', 
        ['longPress', {action: 'moveTo', x: (this.X_Axis_NewsVideoTab+50), y: 0}, 'release'
        ])
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

/*
**** METHODS FOR VALIDATION - MEETING SPECIFIC RACE - HEADER ****
*/

    //Click Meeting Specific Card - 2nd race
    click_raceMeetingHeader_2ndRace(){
        this.raceMeetingHeader_2ndRace.waitForExist();
        this.raceMeetingHeader_2ndRace.click();
        }


    // Check Meeting Specific Card - Track Distance
    waitFor_raceMeetingHeader_TrackDistance() {
        if(!this.raceMeetingHeader_TrackDistance.isVisible()){
        this.raceMeetingHeader_TrackDistance.waitForVisible(5000);
        }
    }
    check_raceMeetingHeader_TrackDistance(){
        expect(this.raceMeetingHeader_TrackDistance.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - Track Weather
    waitFor_raceMeetingHeader_Weather() {
        if(!this.raceMeetingHeader_Weather.isVisible()){
        this.raceMeetingHeader_Weather.waitForVisible(5000);
        }
    }
    check_raceMeetingHeader_Weather(){
        expect(this.raceMeetingHeader_Weather.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - Track Condition    
    waitFor_raceMeetingHeader_Condition() {
        if(!this.raceMeetingHeader_Condition.isVisible()){
        this.raceMeetingHeader_Condition.waitForVisible(5000);
        }
    }
    check_raceMeetingHeader_Condition(){
        expect(this.raceMeetingHeader_Condition.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - Time    
    waitFor_raceMeetingHeader_Time() {
        if(!this.raceMeetingHeader_Time.isVisible()){
        this.raceMeetingHeader_Time.waitForVisible(5000);
        }
    }
    check_raceMeetingHeader_Time(){
        expect(this.raceMeetingHeader_Time.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - Race Code    
    waitFor_raceMeetingHeader_RaceCode() {
        if(!this.raceMeetingHeader_RaceCode.isVisible()){
        this.raceMeetingHeader_RaceCode.waitForVisible(5000);
        }
    }
    check_raceMeetingHeader_RaceCode(){
        expect(this.raceMeetingHeader_RaceCode.isExisting()).to.equal(true);
        }


/*
**** METHODS FOR VALIDATION - MEETING SPECIFIC RACE - FORM TAB ****
*/

    // Check Meeting Specific Card - Form Tab - Jersey Image
    waitFor_raceMeetingForm_Jersey() {
        if(!this.raceMeetingForm_Jersey.isVisible()){
        this.raceMeetingForm_Jersey.waitForVisible(5000);
        }
    }
    check_raceMeetingForm_Jersey(){
        expect(this.raceMeetingForm_Jersey.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - Form Tab - Horse Information
    waitFor_raceMeetingForm_Horse() {
        if(!this.raceMeetingForm_Horse.isVisible()){
        this.raceMeetingForm_Horse.waitForVisible(5000);
        }
    }
    check_raceMeetingForm_Horse(){
        expect(this.raceMeetingForm_Horse.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - Form Tab - Trainer Name
    waitFor_raceMeetingForm_Trainer() {
        if(!this.raceMeetingForm_Trainer.isVisible()){
        this.raceMeetingForm_Trainer.waitForVisible(5000);
        }
    }
    check_raceMeetingForm_Trainer(){
        expect(this.raceMeetingForm_Trainer.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - Form Tab - Jockey Name
    waitFor_raceMeetingForm_Jockey() {
        if(!this.raceMeetingForm_Jockey.isVisible()){
        this.raceMeetingForm_Jockey.waitForVisible(5000);
        }
    }
    check_raceMeetingForm_Jockey(){
        expect(this.raceMeetingForm_Jockey.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - Form Tab - BB Tag
    waitFor_raceMeetingForm_BBTag() {
        if(!this.raceMeetingForm_BBTag.isVisible()){
        this.raceMeetingForm_BBTag.waitForVisible(5000);
        }
    }
    check_raceMeetingForm_BBTag(){
        expect(this.raceMeetingForm_BBTag.isExisting()).to.equal(true);
        }



}

export default new MeetingSpecificRace_HeaderForm();