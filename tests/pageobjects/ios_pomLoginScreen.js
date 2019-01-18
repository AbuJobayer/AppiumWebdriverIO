import Page from './page'

class LoginScreen extends Page{

        //Xpath for Login Tab
        get loginTab() {return browser.element('(//XCUIElementTypeOther[@name="Log in"])[1]');}

        //Xpath for Email Input field
        get emailInputField() {return browser.element('//XCUIElementTypeOther[@name="Email address"]/XCUIElementTypeTextField');}

        //Xpath for Password Input field
        get passwordInputField() {return browser.element('//XCUIElementTypeOther[@name="Password"]/XCUIElementTypeSecureTextField');}

        //Xpath for Login Button
        get loginButton() {return browser.element('(//XCUIElementTypeOther[@name="Log in"])[2]');}

        //Xpath for Back button
        get backButton() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}



     open(){
        super.open('path');
    }

    //Select the Login Tab
    clickOnLoginTab(){
        this.loginTab.waitForExist();
        this.loginTab.click();
    }

    //Input email address
    inputEmailAddress(){
        this.emailInputField.waitForExist();
        this.emailInputField.setValue('abu@redhotminute.com.au');
    }

    //Input password
    inputPassword(){
        this.passwordInputField.waitForExist();
        this.passwordInputField.setValue('abcd@1234');
    }

    //Select the Login Button
    clickOnLoginButton(){
        this.loginButton.waitForExist();
        this.loginButton.click();
        this.loginButton.pause(5000);
    }

    //Click the Back Button
    clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
        }



}

export default new LoginScreen();