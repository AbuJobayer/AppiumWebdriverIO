import Page from './page'

class latestRacingVideosHub extends Page{


/*
***  XPATH FOR - VIDEO HUB - LATEST RACING VIDEOS ***
*/

    //Accessibility ID for Full Replays Tab
    get fullReplaysTab() {return browser.element("~Full Replays");}

    //Accessibility ID for Last 400 Tab
    get last400Tab() {return browser.element("~Last 400");}

    //Accessibility ID for Stewards Vision Tab
    get stewardsVisionTab() {return browser.element("~Stewards' Vision");}

    //Accessibility ID for Trials Tab
    get trialsTab() {return browser.element("~Trials");}

    //Accessibility ID for Post Race Interviews Tab
    get postRaceInterviewsTab() {return browser.element("~Post Race Interviews");}

    //Xpath for Latest Racing Videos - 1st Video from the list
    get latestRacingVideos_1stVideo() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.Button");}

    //Xpath for Latest Racing Videos - 5th Video from the list
    get latestRacingVideos_5thVideo() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.Button");}

    //Get the Y axis of Last 400 Tab
    get yAxis_videoHub_Last400Tab(){return browser.getLocation('~Last 400', 'y');}

    //Get the Y axis of 5th Video from the list
    get yAxis_latestRacingVideos_5thVideo(){return browser.getLocation('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.Button', 'y');}


/*
***  XPATH FOR - VIDEO HUB - LATEST TV SHOWS ***
*/
    //Accessibility ID for Episodes Tab
    get episodesTab() {return browser.element("~Episodes");}

    //Accessibility ID for Highlights Tab
    get highlightsTab() {return browser.element("~Highlights");}

    //Accessibility ID for Featured Tab
    get featuredTab() {return browser.element("~Featured");}

    //Get the Y axis of Episodes Tab
    get yAxis_videoHub_EpisodesTab(){return browser.getLocation('~Episodes', 'y');}

    //Xpath for the 1st video from the list
    get latestTVShows_1stVideo() {return browser.element("//android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.Button");}



/*
***  XPATH FOR VALIDATE - VIDEO HUB - LATEST RACING VIDEOS ***
*/


    //Xpath for 1st Video Content
    get videoHub_1stVideoContent() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Xpath for 1st Video Thumbnail
    get videoHub_1stVideoThumbImage() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]");}

    //Xpath for 1st Video Title
    get videoHub_1stVideoTitle() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[1]");}

    //Xpath for 1st Video Date
    get videoHub_1stVideoDate() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[2]");}

    //Xpath for View More Race Replays
    get videoHub_ViewMoreLatestRacingVideos() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView");}



/*
***  METHODS FOR NAVIGATION - VIDEO HUB - LATEST RACING VIDEOS ***
*/

    open(){
        super.open('path');
    }

    // Moving up the Last 400 tab
    moveUpLast400Tab(){
        this.last400Tab.waitForExist();
        this.last400Tab.pause(3000);
        browser.touchAction('~Last 400', [
            'longPress',
            { action: 'moveTo', x: 0, y: (this.yAxis_videoHub_Last400Tab-1000)},
            'release'
        ])
        }

    // Moving up the 5th Video from the List
    moveUp5thVideo(){
        this.latestRacingVideos_5thVideo.waitForExist();
        this.latestRacingVideos_5thVideo.pause(3000);
        browser.touchAction('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.widget.Button', [
            'longPress',
            { action: 'moveTo', x: 0, y: (this.yAxis_latestRacingVideos_5thVideo-1000)},
            'release'
        ])
        }

    // Moving up the Last 400 tab
    moveUpEpisodesTab(){
        this.episodesTab.waitForExist();
        this.episodesTab.pause(3000);
        browser.touchAction('~Episodes', [
            'longPress',
            { action: 'moveTo', x: 0, y: (this.yAxis_videoHub_EpisodesTab-1100)},
            'release'
        ])
        }


    //Open on the Videohub - Full Replays Tab
    open_fullReplaysTab(){
        this.fullReplaysTab.waitForExist();
        this.fullReplaysTab.click();
    }


    //Open on the Videohub - Last 400 Tab
    open_last400Tab(){
        this.last400Tab.waitForExist();
        this.last400Tab.click();
    }


    //Open on the Videohub - Stewards Vision Tab
    open_stewardsVisionTab(){
        this.stewardsVisionTab.waitForExist();
        this.stewardsVisionTab.click();
    }

    //Open on the Videohub - Trials Tab
    open_trialsTab(){
        this.trialsTab.waitForExist();
        this.trialsTab.click();
    }

    //Open on the Videohub - Post RAce Interview Tab
    open_postRaceInterviewsTab(){
        this.postRaceInterviewsTab.waitForExist();
        this.postRaceInterviewsTab.click();
    }

    //Click on the 1st race from the Latest Racing Videos
    click_latestRacingVideos_1stVideo(){
        this.latestRacingVideos_1stVideo.waitForExist();
        this.latestRacingVideos_1stVideo.click();
    }    

    //Open on the Videohub - Episodes Tab
    open_EpisodesTab(){
        this.episodesTab.waitForExist();
        this.episodesTab.click();
    }

    //Open on the Videohub - Highlights Tab
    open_HighlightsTab(){
        this.highlightsTab.waitForExist();
        this.highlightsTab.click();
    }

    //Open on the Videohub - Featured Tab
    open_FeaturedTab(){
        this.featuredTab.waitForExist();
        this.featuredTab.click();
    }

    //Click on the 1st race from the Latest TV Shows list
    click_latestTVShows_1stVideo(){
        this.latestTVShows_1stVideo.waitForExist();
        this.latestTVShows_1stVideo.click();
    } 


/*
***  METHODS FOR VALIDATION - VIDEO HUB - LATEST RACING VIDEOS ***
*/

    // Check Latest Racing Video - 1st Video content
    waitFor_videoHub_1stVideoContent() {
        if(!this.videoHub_1stVideoContent.isVisible()){
        this.videoHub_1stVideoContent.waitForVisible(5000);
        }
    }
    check_videoHub_1stVideoContent(){
    expect(this.videoHub_1stVideoContent.isExisting()).to.equal(true);
    }

    // Check Latest Racing Video - 1st Video content's Thumbimage
    waitFor_videoHub_1stVideoThumbImage() {
        if(!this.videoHub_1stVideoThumbImage.isVisible()){
        this.videoHub_1stVideoThumbImage.waitForVisible(5000);
        }
    }
    check_videoHub_1stVideoThumbImage(){
    expect(this.videoHub_1stVideoThumbImage.isExisting()).to.equal(true);
    }

    // Check Latest Racing Video - 1st Video content's Title
    waitFor_videoHub_1stVideoTitle() {
        if(!this.videoHub_1stVideoTitle.isVisible()){
        this.videoHub_1stVideoTitle.waitForVisible(5000);
        }
    }
    check_videoHub_1stVideoTitle(){
    expect(this.videoHub_1stVideoTitle.isExisting()).to.equal(true);
    }

    // Check Latest Racing Video - 1st Video content's Date
    waitFor_videoHub_1stVideoDate() {
        if(!this.videoHub_1stVideoDate.isVisible()){
        this.videoHub_1stVideoDate.waitForVisible(5000);
        }
    }
    check_videoHub_1stVideoDate(){
    expect(this.videoHub_1stVideoDate.isExisting()).to.equal(true);
    }

    // Check View More Race Replays
    waitFor_ViewMore_RaceReplays() {
        if(!this.videoHub_ViewMoreLatestRacingVideos.isVisible()){
        this.videoHub_ViewMoreLatestRacingVideos.waitForVisible(5000);
        }
    }
    check_ViewMore_RaceReplays(){
        const Content_ViewMore_RaceReplays = this.videoHub_ViewMoreLatestRacingVideos.getText();
        expect(Content_ViewMore_RaceReplays).to.equal('View More Race Replays');
    }

    // Check View More Stewards Videos
    waitFor_ViewMore_Stewards() {
        if(!this.videoHub_ViewMoreLatestRacingVideos.isVisible()){
        this.videoHub_ViewMoreLatestRacingVideos.waitForVisible(5000);
        }
    }
    check_ViewMore_Stewards(){
        const Content_ViewMore_Stewards = this.videoHub_ViewMoreLatestRacingVideos.getText();
        expect(Content_ViewMore_Stewards).to.equal('View More Stewards Videos');
    }

    // Check View More Trials
    waitFor_ViewMore_Trials() {
        if(!this.videoHub_ViewMoreLatestRacingVideos.isVisible()){
        this.videoHub_ViewMoreLatestRacingVideos.waitForVisible(5000);
        }
    }
    check_ViewMore_Trials(){
        const Content_ViewMore_Trials = this.videoHub_ViewMoreLatestRacingVideos.getText();
        expect(Content_ViewMore_Trials).to.equal('View More Trials');
    }

    // Check View More Post Race Interviews
    waitFor_ViewMore_PostRaceInterviews() {
        if(!this.videoHub_ViewMoreLatestRacingVideos.isVisible()){
        this.videoHub_ViewMoreLatestRacingVideos.waitForVisible(5000);
        }
    }
    check_ViewMore_PostRaceInterviews(){
        const Content_ViewMore_PostRaceInterviews = this.videoHub_ViewMoreLatestRacingVideos.getText();
        expect(Content_ViewMore_PostRaceInterviews).to.equal('View More Post Race Interviews');
    }









}

export default new latestRacingVideosHub();