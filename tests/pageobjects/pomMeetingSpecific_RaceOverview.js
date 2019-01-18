import Page from './page'

class MeetingSpecificRace_RaceOverview extends Page{

/*
**** XPATH FOR MEETING SPECIFIC RACE - NAVIGATION ****
*/


    //Xpath for Back button
    get backButton() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}

    //Xpath for Race Overview Tab
    get raceOverviewTab() {return browser.element("~Race Overview");}



/*
**** XPATH FOR MEETING SPECIFIC RACE - RACE OVERVIEW TAB ****
*/

    //Xpath for Meeting Specific Race - Race Overview Tab - Race Condition
    get raceMeetingOverview_RaceCondition() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]");}

    //Xpath for Meeting Specific Race - Race Overview Tab - Gear Changes
    get raceMeetingOverview_GearChanges() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]");}

    //Xpath for Meeting Specific Race - Race Overview Tab - Track Information
    get raceMeetingOverview_TrackInformation() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]");}






/*
**** METHODS FOR MEETING SPECIFIC RACE - NAVIGATION ****
*/

    open(){
        super.open('path');
    }

    //Click the Back Button
    clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
        }

    //Click Race Overview Tab
    click_raceMeeting_RaceOverview(){
        this.raceOverviewTab.waitForExist();
        this.raceOverviewTab.click();
        }

/*
**** METHODS FOR VALIDATION - MEETING SPECIFIC RACE - RACE OVERVIEW TAB ****
*/


    // Check Meeting Specific Race - Race Overview Tab - Race Condition
    waitFor_raceMeetingOverview_RaceCondition() {
        if(!this.raceMeetingOverview_RaceCondition.isVisible()){
        this.raceMeetingOverview_RaceCondition.waitForVisible(5000);
        }
    }
    check_raceMeetingOverview_RaceCondition(){
        expect(this.raceMeetingOverview_RaceCondition.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Race - Race Overview Tab - Gear Changes
    waitFor_raceMeetingOverview_GearChanges() {
        if(!this.raceMeetingOverview_GearChanges.isVisible()){
        this.raceMeetingOverview_GearChanges.waitForVisible(5000);
        }
    }
    check_raceMeetingOverview_GearChanges(){
        expect(this.raceMeetingOverview_GearChanges.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Race - Race Overview Tab - Track Information
    waitFor_raceMeetingOverview_TrackInformation() {
        if(!this.raceMeetingOverview_TrackInformation.isVisible()){
        this.raceMeetingOverview_TrackInformation.waitForVisible(5000);
        }
    }
    check_raceMeetingOverview_TrackInformation(){
        expect(this.raceMeetingOverview_TrackInformation.isExisting()).to.equal(true);
        }



}

export default new MeetingSpecificRace_RaceOverview();