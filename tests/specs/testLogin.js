import Homescreen from '../pageobjects/pomHomescreen';
import LoginScreen from '../pageobjects/pomLoginScreen';
import UserProfile from '../pageobjects/pomUserProfile';


describe('NAVIGATION 05: Test the Login Function', function() {

    it('Ignore update', function() {
        //Ignore Update
        Homescreen.ignoreUpdate();
    });

    it('Open the Login Screen from Homepage', function() {
        //Click on the Newslink from the Homescreen
        Homescreen.click_menuBar_Profile();
    });

    // it('Click on the Login tab', function() {
    //     //Click on the Login tab
    //     LoginScreen.clickOnLoginTab();
    // });

    // it('Click on the screen', function() {
    //     //Click on the Login Button
    //     LoginScreen.clickOnLoginButton();
    // });

    it('Add email address', function() {
        //Add email address
        LoginScreen.inputEmailAddress();
    });

    it('Add Password', function() {
        //Add email address
        LoginScreen.inputPassword();
    });

    // it('Hide keyboard by pressing done', function () {
    //     browser.hideDeviceKeyboard('pressKey', 'Done');
    // });

    it('Click on the Login Button', function() {
        //Click on the Login Button
        LoginScreen.clickOnLoginButton();
    });

    it('Click on the Back button', function() {
        //Click on the Back button
        Homescreen.click_menuBar_Homescreen();
    });


    /*

    it('Click on the User Profile from the Homescreen', function() {
        //Click on the User Profile from the Homescreen
       Homescreen.clickUserProfileLink();
    });

    it('Click on the Logout button', function() {
        //Click on the Logout button
       UserProfile.clikLogoutButton();
    });

    it('Go back to the Homescreen', function() {
        //Go back to the Homescreen
       UserProfile.clickBackButton();
    });

*/

    

});