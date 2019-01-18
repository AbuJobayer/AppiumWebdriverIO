import Homescreen from '../pageobjects/pomHomescreen';
import VideoPopup from '../pageobjects/pomVideoPopup';
import LoginScreen from '../pageobjects/pomLoginScreen';
import videoHubDropMenuContents from '../pageobjects/pomVideo_DropMenuContents'



describe('NAVIGATION 04: Testing the Video Hub - Race Replays Channel', function() {
    
    it('Ignore update', function() {
        //Ignore Update
        Homescreen.ignoreUpdate();
    });

    it('Open the Login Screen from Homepage', function() {
        //Click on the Newslink from the Homescreen
        Homescreen.click_menuBar_Profile();
    });

    //Get the App XML source for Login screen
    it('Get the App XML source for Login screen', function(){
        VideoPopup.get_AppPageSource();
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

    //Get the App XML source
    it('Get the App XML source 1', function(){
        VideoPopup.get_AppPageSource();
    });

    it('Click on the Top Menu', function() {
        //Click on the Top Menu
        videoHubDropMenuContents.click_videoHubDropdown_MainMenu();
        browser.pause(3000);
    });


    it('Open the Race Replays from the top Menu', function() {
        //Open the Race Replays from the top Menu        
        videoHubDropMenuContents.click_videoHubDropdown_RaceReplays();
    });
 
    //Select the 2nd Race Replay video from the list
    it('Select the 2nd Race Replay video from the list', function() {
        videoHubDropMenuContents.click_videoList_2ndVideo();
    });

    //Open the share button from Race Replays Video
    it('Open the share button from Race Replays Video', function() {
        videoHubDropMenuContents.click_videoShareButton();
        browser.pause(3000);
    });

    //Close the share button from Race Replays Video
    it('Close the share button from Race Replays Video', function() {
        videoHubDropMenuContents.click_videoShare_CloseButton();
    });

    //Click on the Race Replays - Last 400 Tab
    it('Click on the Race Replays - Last 400 Tab', function() {
        videoHubDropMenuContents.click_raceReplays_Last400Tab();
    });
    
    //Select the 2nd Last 400 video from the list
    it('Select the 2nd Last 400 video from the list', function() {
        videoHubDropMenuContents.click_videoList_2ndVideo();
    });

    //Click on the Race Replays - Stewards Vision Tab
    it('Click on the Race Replays - Stewards Vision Tab', function() {
        videoHubDropMenuContents.click_raceReplays_StewardsVisionTab();
    });
    
    //Select the 2nd Stewards Vision video from the list
    it('Select the 2nd Stewards Vision video from the list', function() {
        videoHubDropMenuContents.click_videoList_2ndVideo();
    });

    //Click on the Race Replays - Trials Tab
    it('Click on the Race Replays - Trials Tab', function() {
        videoHubDropMenuContents.click_raceReplays_TrialsTab();
    });
    
    //Select the 2nd Trials video from the list
    it('Select the 2nd Trials video from the list', function() {
        videoHubDropMenuContents.click_videoList_2ndVideo();
        browser.pause(3000);
    });

    //Get the App XML source
    it('Get the App XML source 2', function(){
        VideoPopup.get_AppPageSource();
    });

    //Click on the Race Replays - Post Race Interview Tab
    it('Click on the Race Replays - Post Race Interview Tab', function() {
        videoHubDropMenuContents.click_raceReplays_PostRaceInterviewTab();
    });
    
    //Select the 2nd Post Race Interview video from the list
    it('Select the 2nd Post Race Interview video from the list', function() {
        videoHubDropMenuContents.click_videoList_2ndVideo();
        browser.pause(5000);
    });

    // //Click on the Race Replays - Full Replays Tab
    // it('Click on the Race Replays - Full Replays Tab', function() {
    //     videoHubDropMenuContents.click_raceReplays_FullReplaysTab();
    // });

    //Close the App
    it('Close the App', function() {
        browser.pause(5000);
        VideoPopup.closeApp();
    });

});