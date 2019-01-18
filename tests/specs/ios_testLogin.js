import LoginScreen from '../pageobjects/ios_pomLoginScreen';                                                                              
import MenuBar from '../pageobjects/ios_pomMenuBar'; 



describe('NAVIGATION 07: Test the Login / Logout functionalities', function() {

    //Open the Login Screen from Menu
    it('Open the Login Screen from Menu', function() {
        MenuBar.click_menu_LoginButton();
    });

    it('Click on the Login tab', function() {
        //Click on the Login tab
        LoginScreen.clickOnLoginTab();
    });

    it('Add email address', function() {
        //Add email address
        LoginScreen.inputEmailAddress();
    });

    it('Add Password', function() {
        //Add email address
        LoginScreen.inputPassword();
    });

    it('Hide keyboard by pressing done', function () {
        browser.hideDeviceKeyboard('pressKey', 'Done');
    });

    it('Click on the Login Button', function() {
        //Click on the Login Button
        LoginScreen.clickOnLoginButton();
    });

    //Open the Homescreen
    it('Open the Homescreen', function() {
        
        MenuBar.click_menu_HomeButton();
    });



    

});