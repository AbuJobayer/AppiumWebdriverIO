import Page from './page'

class LoginScreen extends Page{

    //Xpath for Login Tab
    get loginTab() {return browser.element("~Go to Log in");}

    //Xpath for Email Input field
    get emailInputField() {return browser.element("~Enter your email address");}

    //Xpath for Password Input field
    get passwordInputField() {return browser.element("~Enter your password");}

    //Xpath for Login Button
    get loginButton() {return browser.element("~Log in");}

    //Xpath for Back button
    get backButton() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}

    //Xpath for Login Or Signup button
    get loginSignupLink() {return browser.element("//android.support.v7.widget.RecyclerView/android.widget.LinearLayout/android.widget.TextView");}


     open(){
        super.open('path');
    }

    //Select the Login Tab
    clickOnLoginTab(){
       // this.loginTab.waitForExist();
        this.loginTab.click();
    }

    waitForAllContents(){
        this.emailInputField.waitForExist();
        this.passwordInputField.waitForExist();
        this.loginButton.waitForExist();
    }

    //Input email address
    inputEmailAddress(){
        //this.emailInputField.waitForExist();
        //browser.pause(2000);
        this.emailInputField.click();
        this.emailInputField.keys('aa');
    }
 

    //Input password
    inputPassword(){ 
        // this.passwordInputField.waitForExist();
        // browser.pause(2000);
        this.passwordInputField.click();
        this.passwordInputField.keys('ab');
    }
    
    //Select the Login Button
    clickOnLoginButton(){
        //this.loginButton.waitForExist();
        this.loginButton.click();
    }

/*
    //Click the Back Button
    clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
        }
*/

    //Click the Login Or Signup Link
    click_loginSignupLink(){
        this.loginSignupLink.waitForExist();
        this.loginSignupLink.click();
        }

    //Go back to Previous screen
    goBackPreviousScreen(){
        browser.back();
    }

}

export default new LoginScreen();
