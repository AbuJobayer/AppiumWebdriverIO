import Page from './page'

class RacingHub_Home extends Page{

/*
LOCATORS FOR - RACING HUB - HOMEPAGE
*/

    //Accessibility Id for Racing Hub Home - Next To Jump Tab
    get racingHub_Home_NextToJumpTab() {return browser.element("~Next to Jump");}

    //Accessibility Id for Racing Hub Home - Latest Results Tab
    get racingHub_Home_LatestResultsTab() {return browser.element("~Latest Results");}

    //Accessibility Id for Racing Hub Home - My Blackbook Tab
    get racingHub_Home_MyBlackbookTab() {return browser.element("~My Blackbook");}

    //Xpath for Racing Hub Home - 1st Race from the List
    get racingHub_Home_1stRace() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Xpath for Racing Hub Home - View More Button
    get racingHub_Home_ViewMoreButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button");}

    //Y Axis for Racing Hub Home - View More Button
    get Y_Axis_racingHub_Home_ViewMoreButton(){return browser.getLocation('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button', 'y');}

/*
LOCATORS FOR - RACING HUB - HOMEPAGE - RACE MEETINGS
*/

    //Accessibility Id for Racing Hub Home - Race Meetings - Today Tab
    get racingHub_RaceMeetings_TodayTab() {return browser.element("~Today");}

    //Accessibility Id for Racing Hub Home - Race Meetings - Yesterday Tab
    get racingHub_RaceMeetings_YesterdayTab() {return browser.element("~Yesterday");}

    //Accessibility Id for Racing Hub Home - Race Meetings - Tomorrow Tab
    get racingHub_RaceMeetings_TomorrowTab() {return browser.element("~Tomorrow");}

    //Xpath for Racing Hub Home - Race Meetings - 1st Meeting
    get racingHub_RaceMeetings_1stMeeting() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Y Axis for Racing Hub Home - Today Tab
    get Y_Axis_racingHub_RaceMeetings_TodayTab(){return browser.getLocation('~Today', 'y');}


/*
LOCATORS FOR - RACING HUB - HOMEPAGE - TIPS & ANALYSIS / RECOMMENDED BLACKBOOKERS / UPCOMING FEATURE MEETINGS
*/

    //Xpath for Racing Hub Home - Tips & Analysis - 1st Article
    get racingHub_TipsAnalysis_1stArticle() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView[1]/android.view.ViewGroup/android.widget.Button");}


    //Xpath for Racing Hub Home - Recommended Blackbookers - 1st Article
    get racingHub_RecommendedBlackbookers_1stArticle() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.widget.Button[1]");}

    //Xpath for Racing Hub Home - Upcomming Feature Meeting - 1st Meeting
    get racingHub_UpComingFeature_1stMeeting_RacedayButton() {return browser.element("//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.Button[2]");}

    //Y Axis for Racing Hub Home - Today Tab
    get Y_Axis_racingHub_TipsAnalysis_1stArticle(){return browser.getLocation('//android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView[1]/android.view.ViewGroup/android.widget.Button', 'y');}


     open(){
        super.open('path');
    }

/*
METHODS FOR - RACING HUB - HOMEPAGE
*/

    //Click the Racing Hub Home - Next To Jump Tab
    click_racingHub_Home_NextToJumpTab(){
        this.racingHub_Home_NextToJumpTab.waitForExist();
        this.racingHub_Home_NextToJumpTab.click();
        }

    //Click the Racing Hub Home - Latest Results Tab
    click_racingHub_Home_LatestResultsTab(){
        this.racingHub_Home_LatestResultsTab.waitForExist();
        this.racingHub_Home_LatestResultsTab.click();
        }

    //Click the Racing Hub Home - My Blackbook Tab
    click_racingHub_Home_MyBlackbookTab(){
        this.racingHub_Home_MyBlackbookTab.waitForExist();
        this.racingHub_Home_MyBlackbookTab.click();
        }

    //Click the Racing Hub Home - 1st race from the List
    click_racingHub_Home_1stRace(){
        this.racingHub_Home_1stRace.waitForExist();
        this.racingHub_Home_1stRace.click();
        }

    //Move up the Racing Hub Home - View More Button
    move_racingHub_Home_ViewMoreButton_Up(){
        this.racingHub_Home_ViewMoreButton.waitForExist();
        this.racingHub_Home_ViewMoreButton.pause(5000);

        browser.touchAction('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.Button', ['longPress', {action: 'moveTo', x: 0, y: (this.Y_Axis_racingHub_Home_ViewMoreButton-1000)}, 'release']);
        }

/*
METHODS FOR - RACING HUB - RACE MEETINGS / RECOMMENDED BLACKBOOKERS / UPCOMING FEATURE MEETINGS
*/

    //Click the Racing Hub - Race Meetings - Today Tab
    click_racingHub_RaceMeetings_TodayTab(){
        this.racingHub_RaceMeetings_TodayTab.waitForExist();
        this.racingHub_RaceMeetings_TodayTab.click();
        }

    //Click the Racing Hub - Race Meetings - Yesterday Tab
    click_racingHub_RaceMeetings_YesterdayTab(){
        this.racingHub_RaceMeetings_YesterdayTab.waitForExist();
        this.racingHub_RaceMeetings_YesterdayTab.click();
        }

    //Click the Racing Hub - Race Meetings - Tomorrow Tab
    click_racingHub_RaceMeetings_TomorrowTab(){
        this.racingHub_RaceMeetings_TomorrowTab.waitForExist();
        this.racingHub_RaceMeetings_TomorrowTab.click();
        }

    //Click the Racing Hub - Race Meetings - 1st Meeting
    click_racingHub_RaceMeetings_1stMeeting(){
        this.racingHub_RaceMeetings_1stMeeting.waitForExist();
        this.racingHub_RaceMeetings_1stMeeting.click();
        }

    //Click the Racing Hub - Tips & Analysis - 1st Article
    click_racingHub_TipsAnalysis_1stArticle(){
        this.racingHub_TipsAnalysis_1stArticle.waitForExist();
        this.racingHub_TipsAnalysis_1stArticle.click();
        }


    //Click the Racing Hub - Recomended Blackbookers - 1st Article
    click_racingHub_RecommendedBlackbookers_1stArticle(){
        this.racingHub_RecommendedBlackbookers_1stArticle.waitForExist();
        this.racingHub_RecommendedBlackbookers_1stArticle.click();
        }

    //Move up the Racing Hub Home - Today Tab
    move_racingHub_RaceMeetings_TodayTab_Up(){
        this.racingHub_RaceMeetings_TodayTab.waitForExist();
        this.racingHub_RaceMeetings_TodayTab.pause(5000);
        browser.touchAction('~Today', ['longPress', {action: 'moveTo', x: 0, y: (this.Y_Axis_racingHub_RaceMeetings_TodayTab-1000)}, 'release']);
        }
        
    //Move up the Racing Hub - Tips & Analysis -  1st Article Up
    move_racingHub_TipsAnalysis_1stArticle_Up(){
        this.racingHub_TipsAnalysis_1stArticle.waitForExist();
        this.racingHub_TipsAnalysis_1stArticle.pause(5000);
        browser.touchAction('~Today', ['longPress', {action: 'moveTo', x: 0, y: (this.Y_Axis_racingHub_TipsAnalysis_1stArticle-1600)}, 'release']);
        }



    //Click the Racing Hub - Upcoming Feature Meeting - 1st Meeting
    click_racingHub_UpComingFeature_1stMeeting_RacedayButton(){
        this.racingHub_UpComingFeature_1stMeeting_RacedayButton.waitForExist();
        this.racingHub_UpComingFeature_1stMeeting_RacedayButton.click();
        }





}

export default new RacingHub_Home();