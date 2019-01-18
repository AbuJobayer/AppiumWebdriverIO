import Page from './page'

class videoHubDropMenuContents extends Page{


/*
***  XPATH FOR - VIDEO HUB - DROPDOWN MENU CONTENTS ***
*/

    //Accessibility ID for Video Hub Dropdown Menu
    get videoHubDropdown_MainMenu() {return browser.element("~Dropdown menu Video Hub");}

    //Accessibility ID for Video Hub Dropdown Menu - Video Hub
    get videoHubDropdown_VideoHub() {return browser.element("~Go to Video Hub");}

    //Accessibility ID for Video Hub Dropdown Menu - Featured Video
    get videoHubDropdown_FeaturedVideo() {return browser.element("~Go to Featured Videos");}

    //Accessibility ID for Video Hub Dropdown Menu - Race Replays
    get videoHubDropdown_RaceReplays() {return browser.element("~Go to Race Replays");}

    //Accessibility ID for Video Hub Dropdown Menu - Trial Replays
    get videoHubDropdown_TrialReplays() {return browser.element("~Go to Trial Replays");}

    //Accessibility ID for Video Hub Dropdown Menu - TV Shows
    get videoHubDropdown_TVShows() {return browser.element("~Go to TV Shows");}

    //Xpath for Video Hub - Share Button
    get videoShareButton() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}

    //Xpath for Video Hub - Close Share Button
    get videoShare_CloseButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[4]/android.widget.TextView");}

    //Xpath for Video Hub - 2nd Video from the list
    get videoList_2ndVideo() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Button");}

    //Xpath for Video Hub - Video Player
    get videoPlayer() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.Button/android.view.ViewGroup[2]");}

/*
***  XPATH FOR - VIDEO HUB - TV SHOWS ***
*/

    //Xpath for TV Shows - 1st Show
    get tvShows_1stShow() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.Button[1]");}

    //Accessibility ID for Video Hub - TV Shows - Highlights Tab
    get tvShows_HighlightsTab() {return browser.element("~Highlights");}

    //Accessibility ID for Video Hub - TV Shows - Episodes Tab
    get tvShows_EpisodesTab() {return browser.element("~Episodes");}




/*
***  XPATH FOR - VIDEO HUB - RACE REPLAYS ***
*/
//Accessibility ID for Video Hub - Race Replays - Full Replays
get raceReplays_FullReplaysTab() {return browser.element("~Full Replays");}

//Accessibility ID for Video Hub - Race Replays - Last 400
get raceReplays_Last400Tab() {return browser.element("~Last 400");}

//Accessibility ID for Video Hub - Race Replays - Stewards Vision
get raceReplays_StewardsVisionTab() {return browser.element("~Stewards' Vision");}

//Accessibility ID for Video Hub - Race Replays - Trials
get raceReplays_TrialsTab() {return browser.element("~Trials");}

//Accessibility ID for Video Hub - Race Replays - Post Race Interview
get raceReplays_PostRaceInterviewTab() {return browser.element("~Post Race Interview");}



/*
***  METHODS FOR NAVIGATION - VIDEO HUB - DROPDOWN MENU ***
*/

    open(){
        super.open('path');
    }

    //Check Login
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


    //Click on the Videohub - Dropdown Menu
    click_videoHubDropdown_MainMenu(){
        //this.videoHubDropdown_MainMenu.waitForExist();
        this.videoHubDropdown_MainMenu.click();
    }

    //Click on the Videohub Dropdown Menu - Featured Videos
    click_videoHubDropdown_FeaturedVideo(){
        this.videoHubDropdown_FeaturedVideo.waitForExist();
        this.videoHubDropdown_FeaturedVideo.click();
    }

    //Click on the Videohub Dropdown Menu - Race Replays
    click_videoHubDropdown_RaceReplays(){
        this.videoHubDropdown_RaceReplays.waitForExist();
        this.videoHubDropdown_RaceReplays.click();
    }

    //Click on the Videohub Dropdown Menu - Trial Replays
    click_videoHubDropdown_TrialReplays(){
        this.videoHubDropdown_TrialReplays.waitForExist();
        this.videoHubDropdown_TrialReplays.click();
    }

    //Click on the Videohub Dropdown Menu - TV Shows
    click_videoHubDropdown_TVShows(){
        this.videoHubDropdown_TVShows.waitForExist();
        this.videoHubDropdown_TVShows.click();
    }

/*
***  METHODS FOR NAVIGATION - VIDEO HUB - RACE REPLAYS ***
*/

    //Click on the Race Replays - Full Replays Tab
    click_raceReplays_FullReplaysTab(){
        this.raceReplays_FullReplaysTab.waitForExist();
        this.raceReplays_FullReplaysTab.click();
    }

    //Click on the Race Replays - Last 400 Tab
    click_raceReplays_Last400Tab(){
        this.raceReplays_Last400Tab.waitForExist();
        this.raceReplays_Last400Tab.click();
    }

    //Click on the Race Replays - Stewards Vision Tab
    click_raceReplays_StewardsVisionTab(){
        this.raceReplays_StewardsVisionTab.waitForExist();
        this.raceReplays_StewardsVisionTab.click();
    }

    //Click on the Race Replays - Trials Tab
    click_raceReplays_TrialsTab(){
        this.raceReplays_TrialsTab.waitForExist();
        this.raceReplays_TrialsTab.click();
    }

    //Click on the Race Replays - Post Race Interview Tab
    click_raceReplays_PostRaceInterviewTab(){
        this.raceReplays_PostRaceInterviewTab.waitForExist();
        this.raceReplays_PostRaceInterviewTab.click();
    }



/*
***  METHODS FOR NAVIGATION - DROPDOWN MENU - CHECK THE VIDEOS ***
*/

    //Open the 2nd Video from the List
    click_videoList_2ndVideo(){
        this.videoList_2ndVideo.click();
    }

    //Open the share button
    click_videoShareButton(){
        this.videoShareButton.click();
    }

    //Close the share button
    click_videoShare_CloseButton(){
        browser.pause(5000);
        this.videoShare_CloseButton.click();
    }    

    //Click inside the Video Player
    click_InsideVideoPlayer(){
        this.videoPlayer.click();
    }

/*
***  METHODS FOR NAVIGATION - TV SHOWS ***
*/
    //Open the 1st Show
    click_1stTVShows(){
        this.tvShows_1stShow.click();
    }

    click_tvShows_HighlightsTab(){
        this.tvShows_HighlightsTab.click();
    }

    click_tvShows_EpisodesTab(){
        this.tvShows_EpisodesTab.click();
    }

}

export default new videoHubDropMenuContents();