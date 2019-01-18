import Page from './page'

class UserProfile extends Page{

    //Xpath for Logout Button
    get logoutButton() {return browser.element("//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView");}

    //Xpath for Back Button
    get backButton() {return browser.element("//android.view.ViewGroup/android.view.ViewGroup/android.widget.Button");}

     open(){
        super.open('path');
    }

    //Click on the Watch Live Button
    clikLogoutButton(){
        this.logoutButton.waitForExist();
        this.logoutButton.click();
    }

      //Click on the Back Button
      clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
    }
 
}

export default new UserProfile();