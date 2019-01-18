import Page from './page';

class Homescreen extends Page {
/*
XPATH MENUBAR - CONTENT
*/

    //Xpath for the hockeyapp update window
    get hockeyUpdateWindow() { return browser.element("//android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]");}

    //Accessibility id for Menubar  - Home
    get menuBar_Homescreen() {return browser.element("~Navigate to Home");}
    
    //Accessibility id for Menubar  - Racing Hub
    get menuBar_RacingHub() {return browser.element("~Navigate to Racing");}
  
    //Accessibility id for Menubar  - Video Hub Hub
    get menuBar_VideoHub() {return browser.element("~Navigate to Video");}
  
    //Accessibility id for Menubar  - News Hub
    get menuBar_NewsHub() {return browser.element("~Navigate to News");}
  
    //Accessibility id for Menubar  - Profile screen - Login Page
    get menuBar_Profile() {return browser.element("~Navigate to Racing+");}



/*
XPATH FOR HOMESCREEN - CONTENT
*/
    //Accessibility id for Homescreen  - Next To Jump Tab
    get homescreen_NextToJumpTab() {return browser.element("~Next to Jump");}

    //Accessibility id for Homescreen  - Latest Results Tab
    get homescreen_LatestResultTab() {return browser.element("~Latest Results");}

    //Accessibility id for Homescreen  - Todays Meetings Tab
    get homescreen_TodaysMeetingsTab() {return browser.element("~Today's Meetings");}

    //Accessibility id for Homescreen  - Tomorrow Meetings Tab
    get homescreen_TomorrowMeetingsTab() {return browser.element("~Tomorrow's Meetings");}

    //Xpath for Homescreen  - 1st Race
    get homescreen_1stRace() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView[1]/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Accessibility id for Homescreen  - Search Button
    get homescreen_SearchButton() {return browser.element("~Tap here to search");}

    //Xpath for Homescreen  - Carousel Content
    get homescreen_CarouselContent() {return browser.element("//android.widget.HorizontalScrollView[2]/android.view.ViewGroup/android.widget.Button/android.view.ViewGroup");}

    //Accessibility id for Homescreen  - Racing Radio
    get homescreen_RadioButton() {return browser.element("~Listen to live Racing Radio");}

    //Accessibility id for Homescreen  - Next Race Timer
    get homescreen_NextRaceTimer() {return browser.element("~Next to jump");}


/*
XPATH FOR HOMESCREEN - BUTTONS
*/

    //Xpath for Homescreen  - Racing & Tips Button
    get homescreen_RacingTipsButton() {return browser.element("//android.view.ViewGroup[3]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.widget.Button[1]");}

    //Accessibility id for Homescreen  - Race Replays Button
    get homescreen_RaceReplaysButton() {return browser.element("~Go to Race Replays");}

    //Accessibility id for Homescreen  - Latest News Button
    get homescreen_LatestNewsButton() {return browser.element("~Go to Latest News");}

    //Xpath for Homescreen  - TV Shows Button
    get homescreen_TVShowsButton() {return browser.element("//android.view.ViewGroup[3]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.widget.Button[4]");}

    //Accessibility id for Homescreen  - Race Results Button
    get homescreen_RaceResultsButton() {return browser.element("~Go to Race Results");}

    //X Axis for Latest News Button
    get X_Axis_homescreen_LatestNewsButton(){return browser.getLocation('~Go to Latest News', 'x');}

    //Y Axis for Latest News Button
    get Y_Axis_homescreen_LatestNewsButton(){return browser.getLocation('~Go to Latest News', 'y');}

    //Xpath for Homescreen  - Featured News & Video Section
    get homescreen_FeaturedNewsVideoSection() {return browser.element("//android.widget.TextView[@text='Featured News & Video']");}


    //Y Axis for Featured News & Video Section
    get Y_Axis_homescreen_FeaturedNewsVideoSection(){return browser.getLocation('//android.widget.TextView[@text="Featured News & Video"]', 'y');}




    open(){
        super.open('path');
    }



/*
METHODS FOR NAVIGATION - HOMESCREEN
*/

    // //  :: - Move the Tab Header to the LEFT - NEVER BEEN USED - ::
    // move_LatestNewsButton_Left(){
    //     this.homescreen_LatestNewsButton.waitForExist();
    //     this.homescreen_LatestNewsButton.touchAction([
    //         'press',
    //         {action: 'moveTo', x: -100, y: 0},
    //         'release'
    //     ])
    // }



    //Ignore update
    ignoreUpdate(){
        browser.pause(9000);
        //Looking for the Ignore button
        if (browser.isExisting('//android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]'))
        {
            browser.click('//android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]');
        }
        else
        {
            console.log("No update");
        }
    }

    //Swipe the Carousel screen left
    swipe_CarouselScreen_Left(){
        this.homescreen_CarouselContent.waitForExist();
        this.homescreen_CarouselContent.swipeLeft(1000);
        this.homescreen_CarouselContent.pause(3000);
        this.homescreen_CarouselContent.swipeLeft(1000);
        browser.pause(3000);
    }

    //Swipe the Carousel screen Right
    swipe_CarouselScreen_Right(){
        this.homescreen_CarouselContent.waitForExist();
        this.homescreen_CarouselContent.swipeRight(1000);
        browser.screenshot();
        browser.pause(3000);
    }


    // Move up the screen by Latest News
    move_LatestNewsButton_Up(){
        this.homescreen_LatestNewsButton.waitForExist();
        this.homescreen_LatestNewsButton.pause(5000);

        browser.touchAction('~Go to Latest News', ['longPress', {action: 'moveTo', x: 0, y: (this.Y_Axis_homescreen_LatestNewsButton-1200)}, 'release']);
        }

    //Move up the Featured News & Video section
    move_FeaturedNewsVideoSection_Up(){
        this.homescreen_FeaturedNewsVideoSection.waitForExist();
        this.homescreen_FeaturedNewsVideoSection.pause(5000);

        browser.touchAction('//android.widget.TextView[@text="Featured News & Video"]', ['longPress', {action: 'moveTo', x: 0, y: (this.Y_Axis_homescreen_FeaturedNewsVideoSection-1200)}, 'release']);
        }

    // Open and close Radio
    clicks_Homescreen_RadioButton(){
        this.homescreen_RadioButton.waitForExist();
        this.homescreen_RadioButton.click();
        browser.screenshot();
        browser.pause(10000);
        this.homescreen_RadioButton.click();

    }

    
    // //Get the Window size 
    // get_Windowsize(){
    //     let handleOneSize = driver.windowHandleSize();
    //     let handleTwoSize = driver.windowHandleSize("The session id");

    // }




/*
METHODS FOR NAVIGATION - MENUBAR
*/

    // Click on Menubar - Home Button
    click_menuBar_Homescreen(){
        his.menuBar_Homescreen.waitForExist();
        this.menuBar_Homescreen.click();
    }

    // Click on Menubar - Racing Hub
    click_menuBar_RacingHub(){
        this.menuBar_RacingHub.waitForExist();
        this.menuBar_RacingHub.click();
    }

    // Click on Menubar - Video Hub
    click_menuBar_VideoHub(){
        this.menuBar_VideoHub.waitForExist();
        this.menuBar_VideoHub.click();
    }

    // Click on Menubar - News Hub
    click_menuBar_NewsHub(){
        this.menuBar_NewsHub.waitForExist();
        this.menuBar_NewsHub.click();
    }

    // Click on Menubar - Profile
    click_menuBar_Profile(){
        this.menuBar_Profile.waitForExist();
        this.menuBar_Profile.click();
    }

/*
METHODS FOR NAVIGATION - HOMESCREEN - TOP CONTENT
*/

    // Click on Homescreen - Search Button
    click_homescreen_SearchButton(){
        this.homescreen_SearchButton.waitForExist();
        this.homescreen_SearchButton.click();
    }

    // Click on Homescreen - Next To Jump Tab
    click_homescreen_NextToJumpTab(){
       // this.homescreen_NextToJumpTab.waitForExist();
        this.homescreen_NextToJumpTab.click();
    }


    // Click on Homescreen - Latest Result Tab
    click_homescreen_LatestResultTab(){
        //this.homescreen_LatestResultTab.waitForExist();
        this.homescreen_LatestResultTab.click();
    }

    // Click on Homescreen - Todays Meetings Tab
    click_homescreen_TodaysMeetingsTab(){
     //   this.homescreen_TodaysMeetingsTab.waitForExist();
        this.homescreen_TodaysMeetingsTab.click();
    }

    // Click on Homescreen - Tomorrow Meetings Tab
    click_homescreen_TomorrowMeetingsTab(){
       // this.homescreen_TomorrowMeetingsTab.waitForExist();
        this.homescreen_TomorrowMeetingsTab.click();
    }    

    // Click on Homescreen - 1st Race From the Top Tabs
    click_homescreen_1stRace(){
       // this.homescreen_1stRace.waitForExist();
        this.homescreen_1stRace.click();
    }

    // Click on Homescreen - Top Carousel screen
    click_homescreen_CarouselContent(){
        //this.homescreen_CarouselContent.waitForExist();
        this.homescreen_CarouselContent.click();
    }

    // Click on Homescreen - Racing & Tips Button
    click_homescreen_RacingTipsButton(){
        // this.homescreen_RacingTipsButton.waitForExist();
        this.homescreen_RacingTipsButton.click();
    }

    // Click on Homescreen - Race Replays Button
    click_homescreen_RaceReplaysButton(){
        //this.homescreen_RaceReplaysButton.waitForExist();
        this.homescreen_RaceReplaysButton.click();
    }

    // Click on Homescreen - Latest News Button
    click_homescreen_LatestNewsButton(){
      //  this.homescreen_LatestNewsButton.waitForExist();
        this.homescreen_LatestNewsButton.click();
    }

    // Click on Homescreen - TV Shows Button
    click_homescreen_TVShowsButton(){
       // this.homescreen_TVShowsButton.waitForExist();
        this.homescreen_TVShowsButton.click();
    }

    // Click on Homescreen - Race Result Button
    click_homescreen_RaceResultsButton(){
       // this.homescreen_RaceResultsButton.waitForExist();
        this.homescreen_RaceResultsButton.click();
    }

    // Click on Homescreen - Next Race's Timer
    click_homescreen_NextRaceTimer(){
      //  this.homescreen_NextRaceTimer.waitForExist();
        this.homescreen_NextRaceTimer.click();
    }

}
export default new Homescreen();