import Homescreen from '../pageobjects/pomHomescreen';
import VideoPopup from '../pageobjects/pomVideoPopup';
import LoginScreen from '../pageobjects/pomLoginScreen';
import videoHubDropMenuContents from '../pageobjects/pomVideo_DropMenuContents'



describe('NAVIGATION 04: Testing the Video Hub - TV Shows Channel', function() {
    
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

    it('Open the TV Shows from the top Menu', function() {
        //Open the TV Shows from the top Menu       
        videoHubDropMenuContents.click_videoHubDropdown_TVShows();
    });

    it('Open the 1st TV Show', function() {
        videoHubDropMenuContents.click_1stTVShows();
        browser.pause(3000);
    });    

    //Select the 2nd Episodes from the list
    it('Select the 2nd Episodes from the list', function() {
        videoHubDropMenuContents.click_videoList_2ndVideo();
    });
 
    //Open the share button from TV Show
    it('Open the share button from TV Show', function() {
        videoHubDropMenuContents.click_videoShareButton();
        browser.pause(3000);
    });

    //Close the share button from TV Show
    it('Close the share button from TV Show', function() {
        videoHubDropMenuContents.click_videoShare_CloseButton();
        browser.pause(3000);
    });

    //Open the Video Hub - TV Shows - Highlights Tab
    it('Open the Video Hub - TV Shows - Highlights Tab', function() {
        videoHubDropMenuContents.click_tvShows_HighlightsTab();
        browser.pause(3000);
    });

    //Select the 2nd Highlights from the list
    it('Select the 2nd Highlights from the list', function() {
        videoHubDropMenuContents.click_videoList_2ndVideo();
    });


    //Close the App
    it('Close the App', function() {
        browser.pause(5000);
        VideoPopup.closeApp();
    });

});