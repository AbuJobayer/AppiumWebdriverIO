import Page from './page'

class MeetingSpecificRace_ExpertTips extends Page{

/*
**** XPATH FOR MEETING SPECIFIC RACE - NAVIGATION ****
*/

    //Accessibility id for Meeting Specific Race - Expert Tips Tab
    get raceMeetingExpertTip_Tab() {return browser.element("~Expert Tips");}

    



/*
**** XPATH FOR MEETING SPECIFIC RACE - EXPERT TIPS TAB ****
*/

    //Xpath for Meeting Specific Race - Expert Tips Tab - First Content from the List
    get raceMeetingExpertTip_FirstContent() {return browser.element("//android.view.ViewGroup[3]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Xpath for Meeting Specific Race - Expert Tips Tab - Content Image
    get raceMeetingExpertTip_ContentImage() {return browser.element("//android.view.ViewGroup[3]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]");}
    
    //Xpath for Meeting Specific Race - Expert Tips Tab - Content Title
    get raceMeetingExpertTip_ContentTitle() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[1]");}
 
    //Xpath for Meeting Specific Race - Expert Tips Tab - Content Date
    get raceMeetingExpertTip_ContentDate() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[2]");}


/*
**** METHODS FOR MEETING SPECIFIC RACE - NAVIGATION ****
*/

    open(){
        super.open('path');
    }

    //Click Meeting Specific Card - Expert Tips Tab
    click_raceMeetingExpertTipTab(){
        this.raceMeetingExpertTip_Tab.waitForExist();
        this.raceMeetingExpertTip_Tab.click();
        }

/*
**** METHODS FOR VALIDATION - MEETING SPECIFIC RACE - HEADER ****
*/

    // Check Meeting Specific Card - Expert Tips Tab - First Content
    waitFor_raceMeetingExpertTip_FirstContent() {
        if(!this.raceMeetingExpertTip_FirstContent.isVisible()){
        this.raceMeetingExpertTip_FirstContent.waitForVisible(5000);
        }
    }
    check_raceMeetingExpertTip_FirstContent(){
        expect(this.raceMeetingExpertTip_FirstContent.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - Expert Tips Tab - Content Image
    waitFor_raceMeetingExpertTip_ContentImage() {
        if(!this.raceMeetingExpertTip_ContentImage.isVisible()){
        this.raceMeetingExpertTip_ContentImage.waitForVisible(5000);
        }
    }
    check_raceMeetingExpertTip_ContentImage(){
        expect(this.raceMeetingExpertTip_ContentImage.isExisting()).to.equal(true);
        }   

    // Check Meeting Specific Card - Expert Tips Tab - Content Title
    waitFor_raceMeetingExpertTip_ContentTitle() {
        if(!this.raceMeetingExpertTip_ContentTitle.isVisible()){
        this.raceMeetingExpertTip_ContentTitle.waitForVisible(5000);
        }
    }
    check_raceMeetingExpertTip_ContentTitle(){
        expect(this.raceMeetingExpertTip_ContentTitle.isExisting()).to.equal(true);
        }

    // Check Meeting Specific Card - Expert Tips Tab - Content Date
    waitFor_raceMeetingExpertTip_ContentDate() {
        if(!this.raceMeetingExpertTip_ContentDate.isVisible()){
        this.raceMeetingExpertTip_ContentDate.waitForVisible(5000);
        }
    }
    check_raceMeetingExpertTip_ContentDate(){
        expect(this.raceMeetingExpertTip_ContentDate.isExisting()).to.equal(true);
        }

}

export default new MeetingSpecificRace_ExpertTips();