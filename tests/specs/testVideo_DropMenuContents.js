import Homescreen from '../pageobjects/pomHomescreen';
import VideoPopup from '../pageobjects/pomVideoPopup';
import LoginScreen from '../pageobjects/pomLoginScreen';
import videoHubDropMenuContents from '../pageobjects/pomVideo_DropMenuContents'



describe('NAVIGATION 04: Testing the Latest Video Hub - All Tabs', function() {
    
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
    });

    it('Select the Featured Videos', function() {
        //Select the Featured Videos
        videoHubDropMenuContents.click_videoHubDropdown_FeaturedVideo();
        browser.pause(5000);
    });

    //Select the 2nd Featured video from the list
    it('Select the 2nd Featured video from the list', function() {
        videoHubDropMenuContents.click_videoList_2ndVideo();
    });

    //Open the share button from Featured Video
    it('Open the share button from Featured Video', function() {
        videoHubDropMenuContents.click_videoShareButton();
    });

    //Close the share button from Featured Video
    it('Close the share button from Featured Video', function() {
        videoHubDropMenuContents.click_videoShare_CloseButton();
    });

    it('Go back to the Previous screen 1', function() {
        //Go back to the Previous screen 1
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });

    it('Open the Race Replays from the top Menu', function() {
        //Open the Race Replays from the top Menu
        videoHubDropMenuContents.click_videoHubDropdown_MainMenu();
        browser.pause(3000);
        videoHubDropMenuContents.click_videoHubDropdown_RaceReplays();
    });
 
    //Select the 2nd Race Replay video from the list
    it('Select the 2nd Race Replay video from the list', function() {
        videoHubDropMenuContents.click_videoList_2ndVideo();
    });

    it('Go back to the Previous screen 2', function() {
        //Go back to the Previous screen 2
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });

    it('Open the Trial Replays from the top Menu', function() {
        //Open the Trial Replays from the top Menu
        videoHubDropMenuContents.click_videoHubDropdown_MainMenu();
        browser.pause(3000);
        videoHubDropMenuContents.click_videoHubDropdown_TrialReplays();
    });

    //Select the 2nd Trial Replay video from the list
    it('Select the 2nd Trial Replay video from the list', function() {
        videoHubDropMenuContents.click_videoList_2ndVideo();
    });

    it('Go back to the Previous screen 3', function() {
        //Go back to the Previous screen 3
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });

    it('Open the TV Shows', function() {
        //Open the TV Shows
        videoHubDropMenuContents.click_videoHubDropdown_MainMenu();
        browser.pause(3000);
        videoHubDropMenuContents.click_videoHubDropdown_TVShows();
    });

    it('Open the 1st TV SHows', function() {
        //Go back to the Previous screen 3
        //browser.pause(5000);
        videoHubDropMenuContents.click_1stTVShows();
    });    

    //Select the 2nd TV Show from the list
    it('Select the 2nd TV Show from the list', function() {
        videoHubDropMenuContents.click_videoList_2ndVideo();
    });

    it('Go back to the Previous screen 4', function() {
        //Go back to the Previous screen 4
        browser.pause(5000);
        VideoPopup.goback_MobileApp();
    });

    //Close the App
    it('Close the App', function() {
        browser.pause(5000);
        VideoPopup.closeApp();
    });









 









});