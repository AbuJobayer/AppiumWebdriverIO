import Page from './page';

class MenuBar extends Page {

    //Xpath for Home Button
    get menu_HomeButton() { return browser.element('//XCUIElementTypeOther[@name="4 4 Home"]');}

    //Xpath for Racing Button
    get menu_RacingButton() { return browser.element('//XCUIElementTypeOther[@name="F F Racing"]');}

    //Xpath for Video Button
    get menu_VideoButton() { return browser.element('//XCUIElementTypeOther[@name="0 0 Video"]');}

    //Xpath for News Button
    get menu_NewsButton() { return browser.element('//XCUIElementTypeOther[@name="a a News"]');}

    //Xpath for Login Button
    get menu_LoginButton() { return browser.element('//XCUIElementTypeOther[@name="} } Racing+"]');}



    open(){
        super.open('path');
    }


    // Click on the Racing Button
    click_menu_RacingButton(){
        this.menu_RacingButton.waitForExist();
        this.menu_RacingButton.click();
    }

    // Click on the Video Button
    click_menu_VideoButton(){
        this.menu_VideoButton.waitForExist();
        this.menu_VideoButton.click();
    }

    // Click on the News Button
    click_menu_NewsButton(){
        this.menu_NewsButton.waitForExist();
        this.menu_NewsButton.click();
    }

    // Click on the Login Button
    click_menu_LoginButton(){
        this.menu_LoginButton.waitForExist();
        this.menu_LoginButton.click();
    }

    // Click on the Login Button
    click_menu_HomeButton(){
        this.menu_HomeButton.waitForExist();
        this.menu_HomeButton.click();
    }


}

export default new MenuBar();