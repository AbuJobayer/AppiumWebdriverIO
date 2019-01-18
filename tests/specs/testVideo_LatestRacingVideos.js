import Homescreen from '../pageobjects/pomHomescreen';
import latestRacingVideosHub from '../pageobjects/pomVideo_LatestRacingVideoHub';
import VideoPopup from '../pageobjects/pomVideoPopup';
import LoginScreen from '../pageobjects/pomLoginScreen';

describe('NAVIGATION 04: Testing the Latest Video Hub - All Tabs', function() {
    
    it('Ignore update', function() {
        //Ignore Update
        Homescreen.ignoreUpdate();
    });

    it('Open the Login Screen from Homepage', function() {
        //Click on the Newslink from the Homescreen
        Homescreen.click_menuBar_Profile();
    });

    it('Add email address', function() {
        //Add email address
        LoginScreen.inputEmailAddress();
    });

    it('Add Password', function() {
        //Add email address
        LoginScreen.inputPassword();
    });

    it('Click on the Login Button', function() {
        //Click on the Login Button
        LoginScreen.clickOnLoginButton();
    });
        
    it('Click on the Video Hub from the Menubar', function() {
        //Click on the Video Hub from the Menubar
        Homescreen.click_menuBar_VideoHub();
    });

    //Open the Latest Racing Videos - Last 400 Tab
    it('Open the Latest Racing Videos - Last 400 Tab', function(){
        latestRacingVideosHub.open_last400Tab();
    });

    //Move up Latest Racing Videos - Last 400 Tab
    it('Move up Latest Racing Videos - Last 400 Tab', function(){
        latestRacingVideosHub.moveUpLast400Tab();
    });

    //Get the App XML source
    it('Get the App XML source 1', function(){
        VideoPopup.get_AppPageSource();
    });

    //Click on the Last 400 Tab - 1st Video
    it('Click on the Last 400 Tab - 1st Video', function(){
        latestRacingVideosHub.click_latestRacingVideos_1stVideo();
    });

    it('Go back to the Previous screen 1', function() {
        //Go back to the Previous screen 1
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });

    //Open the Latest Racing Videos - Full Replays Tab
    it('Open the Latest Racing Videos - Full Replays Tab', function(){
        latestRacingVideosHub.open_fullReplaysTab();
    });

    //Open the Full Replays Tab - 1st Video
    it('Open the Full Replays Tab - 1st Video', function(){
        latestRacingVideosHub.click_latestRacingVideos_1stVideo();
    });

    //Take Screenshot - Full Replays Video
    it('Take Screenshot - Full Replays Video', function(){
        VideoPopup.takeScreenshot();
    });

    it('Go back to the Previous screen 2', function() {
        //Go back to the Previous screen 2
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });

    //Open the Latest Racing Videos - Stewards Vision Tab
    it('Open the Latest Racing Videos - Stewards Vision Tab', function(){
        latestRacingVideosHub.open_stewardsVisionTab();
    });

    //Open the Stewards Vision Tab - 1st Video
    it('Open the Full Replays Tab - 1st Video', function(){
        latestRacingVideosHub.click_latestRacingVideos_1stVideo();
    });

    //Take Screenshot - Stewards Vision Video
    it('Take Screenshot - Stewards Vision Video', function(){
        VideoPopup.takeScreenshot();
    });

    it('Go back to the Previous screen 3', function() {
        //Go back to the Previous screen 3
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });

    //Open the Latest Racing Videos - Trials Tab
    it('Open the Latest Racing Videos - Trials Tab', function(){
        latestRacingVideosHub.open_trialsTab();
    });

    //Open the Trials Tab - 1st Video
    it('Open the Trials Tab - 1st Video', function(){
        latestRacingVideosHub.click_latestRacingVideos_1stVideo();
    });

    //Take Screenshot - Trials Video
    it('Take Screenshot - Trials Video', function(){
        VideoPopup.takeScreenshot();
    });

    it('Go back to the Previous screen 4', function() {
        //Go back to the Previous screen 4
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });

    //Open the Latest Racing Videos - Post Race Interviews Tab
    it('Open the Latest Racing Videos - Post Race Interviews Tab', function(){
        latestRacingVideosHub.open_postRaceInterviewsTab();
    });

    //Open the Post Race Interviews Tab - 1st Video
    it('Open the Post Race Interviews Tab - 1st Video', function(){
        latestRacingVideosHub.click_latestRacingVideos_1stVideo();
    });

    //Take Screenshot - Post Race Interviews Video
    it('Take Screenshot - Post Race Interviews Video', function(){
        VideoPopup.takeScreenshot();
    });

    it('Go back to the Previous screen 5', function() {
        //Go back to the Previous screen 5
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });

    //Get the App XML source 3
    it('Get the App XML source 3', function(){
        VideoPopup.get_AppPageSource();
    });	

    //Move up Latest Racing Videos - 5th Video
    it('Move up Latest Racing Videos - 5th Video', function(){
        latestRacingVideosHub.moveUp5thVideo();
    });

    //Move up Latest Racing Videos - Episodes Tab
    it('Move up Latest Racing Videos - Episodes Tab', function(){
        latestRacingVideosHub.moveUpEpisodesTab();
    });

    //Get the App XML source 3
    it('Get the App XML source 3', function(){
        browser.pause(3000);
        VideoPopup.get_AppPageSource();
    });


    //Open the Latest TV Shows - Highlights Tab
    it('Open the Latest TV Shows - Highlights Tab', function(){
        latestRacingVideosHub.open_HighlightsTab();
    });

    //Open the Highlights Tab - 1st Video
    it('Open the Highlights Tab - 1st Video', function(){
        latestRacingVideosHub.click_latestTVShows_1stVideo();
    });

    //Take Screenshot - Highlights Video
    it('Take Screenshot - Highlights Video', function(){
        VideoPopup.takeScreenshot();
    });

    it('Go back from Highlights Video', function() {
        //Go back from Highlights Video
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });

    //Open the Latest TV Shows - Episodes Tab
    it('Open the Latest TV Shows - Episodes Tab', function(){
        latestRacingVideosHub.open_EpisodesTab();
    });

    //Open the Episodes Tab - 1st Video
    it('Open the Episodes Tab - 1st Video', function(){
        latestRacingVideosHub.click_latestTVShows_1stVideo();
    });

    //Take Screenshot - Episodes Video
    it('Take Screenshot - Episodes Video', function(){
        VideoPopup.takeScreenshot();
    });

    it('Go back from Episodes Video', function() {
        //Go back from Episodes Video
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });

    //Open the Latest TV Shows - Featured Tab
    it('Open the Latest TV Shows - Featured Tab', function(){
        latestRacingVideosHub.open_FeaturedTab();
    });

    //Open the Featured Tab - 1st Video
    it('Open the Featured Tab - 1st Video', function(){
        latestRacingVideosHub.click_latestTVShows_1stVideo();
    });

    //Take Screenshot - Featured Video
    it('Take Screenshot - Featured Video', function(){
        VideoPopup.takeScreenshot();
    });

    it('Go back from Featured Video', function() {
        //Go back from Featured Video
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });



});