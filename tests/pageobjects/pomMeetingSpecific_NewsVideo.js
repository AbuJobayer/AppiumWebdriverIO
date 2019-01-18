import Page from './page'

class MeetingSpecificRace_NewsVideo extends Page{

/*
**** XPATH FOR MEETING SPECIFIC RACE - NAVIGATION ****
*/
    //Accessibility ID for Meeting Specific Race - News & Video Tab - First Content from the List
    get raceMeetingNewsVideo_Tab() {return browser.element("~News & Video");}

    //Accessibility ID  for Race Overview Tab
    get raceOverviewTab() {return browser.element("~Race Overview");}

    //X Axis for Race Overview Tab Tab
    get X_Axis_raceOverviewTab(){return browser.getLocation('~Race Overview', 'x');}



/*
**** XPATH FOR MEETING SPECIFIC RACE - NEWS & VIDEO TAB ****
*/

    //Xpath for Meeting Specific Race - News & Video Tab - Content Image
    get raceMeetingNewsVideo_FirstContent() {return browser.element("//android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Xpath for Meeting Specific Race - News & Video Tab - Content Title
    get raceMeetingNewsVideo_ContentTitle() {return browser.element("//android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for Meeting Specific Race - News & Video Tab - Content Date
    get raceMeetingNewsVideo_ContentDate() {return browser.element("//android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[2]");}

    //Xpath for Meeting Specific Race - News & Video Tab - Content Date
    get raceMeetingNewsVideo_ContentImage() {return browser.element("//android.view.ViewGroup[3]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]");}

    

/*
**** METHODS FOR MEETING SPECIFIC RACE - NAVIGATION ****
*/

    open(){
        super.open('path');
    }

    //Click Meeting Specific Card - Expert Tips Tab
    click_raceMeeting_RaceOverview(){
        this.raceOverviewTab.waitForExist();
        this.raceOverviewTab.click();
        }

    //Click Meeting Specific Card - News & Video Tab
    click_raceMeetingNewsVideoTab(){
        this.raceMeetingNewsVideo_Tab.waitForExist();
        this.raceMeetingNewsVideo_Tab.click();
        }


    // Move the Tab Header to the LEFT
    move_raceOverviewTabLeft(){
        this.raceOverviewTab.waitForExist();
        this.raceOverviewTab.pause(3000);
        browser.touchAction('//android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]', 
        ['longPress', {action: 'moveTo', x: (this.X_Axis_raceOverviewTab-100), y: 0}, 'release'
        ])
    }

/*
**** METHODS FOR VALIDATION - MEETING SPECIFIC RACE - NEWS & VIDEO ****
*/

    // Check Meeting Specific Card - News & video Tab - First Content
    waitFor_raceMeetingNewsVideo_FirstContent() {
        if(!this.raceMeetingNewsVideo_FirstContent.isVisible()){
        this.raceMeetingNewsVideo_FirstContent.waitForVisible(5000);
        }
    }
    check_raceMeetingNewsVideo_FirstContent(){
        expect(this.raceMeetingNewsVideo_FirstContent.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - News & video Tab - Content Image
    waitFor_raceMeetingNewsVideo_ContentImage() {
        if(!this.raceMeetingNewsVideo_ContentImage.isVisible()){
        this.raceMeetingNewsVideo_ContentImage.waitForVisible(5000);
        }
    }
    check_raceMeetingNewsVideo_ContentImage(){
        expect(this.raceMeetingNewsVideo_ContentImage.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - News & video Tab - Content Title
    waitFor_raceMeetingNewsVideo_ContentTitle() {
        if(!this.raceMeetingNewsVideo_ContentTitle.isVisible()){
        this.raceMeetingNewsVideo_ContentTitle.waitForVisible(5000);
        }
    }
    check_raceMeetingNewsVideo_ContentTitle(){
        expect(this.raceMeetingNewsVideo_ContentTitle.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - News & video Tab - Content Date
    waitFor_raceMeetingNewsVideo_ContentDate() {
        if(!this.raceMeetingNewsVideo_ContentDate.isVisible()){
        this.raceMeetingNewsVideo_ContentDate.waitForVisible(5000);
        }
    }
    check_raceMeetingNewsVideo_ContentDate(){
        expect(this.raceMeetingNewsVideo_ContentDate.isExisting()).to.equal(true);
        }



}

export default new MeetingSpecificRace_NewsVideo();